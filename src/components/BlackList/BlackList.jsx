import { useEffect, useState } from "react";
import lamp from "../../assets/profile/lamp.svg";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";
import arrow_right from "../../assets/profile/arrow_right.svg";
import BageBlackListCompany from "../BageBlackListCompany/BageBlackListCompany";
import { API } from "../../const";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

// const blackList =  [
//     {id:1, name: "Google"},
//     {id:2, name: "Meta"},
//     {id:3, name: "LinkedIn"},
//     {id:4, name: "Microsoft"},
// ]

export default function BlackList(){
    const queryClient = useQueryClient();
    const token = useSelector((state) => state.token.token);
    const [isLoadingBlackList, setIsLoadingBlackList] = useState(false);
    const [duplicateError, setDuplicateError] = useState("");
    const [selectedCompanyName, setSelecetedCompanyName] = useState("");
    const [blacklistedСompanies, setblacklistedCompanies] = useState([]);
    
    const {data, isSuccess, isLoading} = useQuery({
        queryKey:['getBlackList'],
        queryFn: async () => {
            const response = await axios.post(API.GET_BLACKLIST,{},{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })            
            return response.data;
        },
    });

    useEffect(()=>{
        if (isSuccess && data) {
            if (Array.isArray(data)) {
                setblacklistedCompanies(data);
            } else if (data.id && data.company_name) {
                setblacklistedCompanies((prev) => [
                    ...prev,
                    { id: data.id, company_name: data.company_name },
                ]);
            }
        }
    },[isSuccess, data])

    const AddCompanyInBlackList = useMutation({
        mutationFn: async (data) => {
          await axios.post(API.ADD_TO_BLACKLIST, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
          });
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(["getBlackList"]);
        },
        onError: (error) => {
            if(error.response.status === 400 && error.response.data.detail === "Company already in blacklist") {
                setDuplicateError(error.response.data.detail);           
            }
        },
        onSettled: () => {
            setSelecetedCompanyName("");
            setIsLoadingBlackList(false);
        },
    });

    const DelCompanyInBlackList = useMutation({
        mutationFn: async (data) => {
          await axios.post(API.DELETE_BLACKLIST_COMPANY, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
          });
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(["getBlackList"]);
        },
        onError: (error) => {
            console.error("Error sending data:", error);
        },
        onSettled: () => {
            setIsLoadingBlackList(false);
        },
    });

    const handleCpmpanyName = (e) => {
        setDuplicateError("");
        setSelecetedCompanyName(e.target.value);
    }

    const removeCompanyFromTheBlacklist = (value) => {
        const requestData = { company_name: value };
        DelCompanyInBlackList.mutate(requestData);
    }
    
    const handleSendCompanyName = (e) =>{
        e.preventDefault()
        const requestData = { company_name: selectedCompanyName };
        setIsLoadingBlackList(true);
        
        AddCompanyInBlackList.mutate(requestData);
    }

    return(
        <section
            style={blacklistedСompanies.length > 0 || isLoading || isLoadingBlackList 
                ?{width:"1000px"} : {width:"500px"}
            } 
            className="profile__blacklist-box">
            <section 
                className="profile__black-list">
                <h3 className="profile__black-list__title">Excluded Companies</h3>
                <div className="profile__black-list__container">
                    <img src={lamp} alt="lamp_icon" />
                    <p className="profile__black-list__container__description">Specify only those companies for which you want to avoid automatic applications. 
                        We will tailor job suggestions and exclude listings 
                        from these specific employers only if the company names match exactly.</p>
                </div>
                <form
                    className="profile__black-list__form"
                    onSubmit={handleSendCompanyName}
                >
                    <div className="profile__black-list__form__group">
                        <input 
                            type="text"
                            name="company"
                            className={`profile__black-list__form__input ${
                                duplicateError ? "profile__black-list__form__input__error" : ""
                            }`} 
                            placeholder="Company name to exclude from job search"
                            onChange={handleCpmpanyName}
                            value={selectedCompanyName}
                        />
                        {duplicateError && (
                            <span className="profile__black-list__form__error-message">{duplicateError}</span>
                        )}
                    </div>
                    <ButtonComponent 
                        type="sumbit"
                        classNameButton="profile__black-list__form__button"
                        classNameText="profile__black-list__form__button__text"
                        textButton="Exclude"
                        src={arrow_right}
                        alt="arrow_icon"
                    />
                </form>
            </section>
            {blacklistedСompanies.length > 0
                ?(
                    <>
                        <div className="profile__black-list__divider"></div>
                        <section className="profile__black-list__company">
                            <h3 className="profile__black-list__company__title">You have excluded companies:</h3>
                            <div className="profile__black-list__company__badge-list">
                                {blacklistedСompanies.map(company =>(
                                    <BageBlackListCompany 
                                        key={company.id}
                                        name={company.company_name}
                                        handleDel={removeCompanyFromTheBlacklist}
                                    />
                                ))}
                            </div>
                        </section>
                    </>
                ):(
                    isLoading || isLoadingBlackList 
                    ?(
                        <>
                            <div className="profile__black-list__divider"></div>
                            <div className="profile__black-list__loader">
                                <div className="profile__black-list__loader__spinner"></div>
                            </div>
                        </>

                    ):(
                        ""
                    )
                )}
        </section>
    )
}