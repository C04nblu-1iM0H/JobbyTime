import axios from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import RadioButtonComponent from "../Location/RadioButtonComponent/RadioButtonComponent";
import { API, SecurityClearanceLevel } from "../../const";

export default function SecurityClearance(){
    const [selectedOption, setSelectedOption] = useState({ securityClearance:null });
    const [checkbox, setChekbox] = useState([]);
    const token = useSelector(state => state.token.token);  

    const storedsecurityClearance= useSelector((state) => state.user.userData.securityClearance);
    const storedlevelOfClearance= useSelector((state) => state.user.userData.levelOfClearance);

    useEffect(() => {
        if (storedsecurityClearance !== null) {
            setSelectedOption({ securityClearance: storedsecurityClearance });
        }
    }, [storedsecurityClearance]);

    useEffect(() => {
        if (storedlevelOfClearance && Array.isArray(storedlevelOfClearance)) {
            setChekbox(storedlevelOfClearance);
        }
    }, [storedlevelOfClearance]);

    const mutation = useMutation({
        mutationFn: async (option) => {
            console.log(option);
            const response = await axios.post(API.UPDATE_SECURITY_CLEARANCE, option, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });    
            return response.data      
        },
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.error(error)
        },
    });


    const handleOptionChange = (option) => {
        setSelectedOption({securityClearance: option});
        const requestData = { SecurityClearance: option };
        mutation.mutate(requestData);
    };

    const mutationlevelOfClearance = useMutation({
        mutationFn: async (data) => {            
            const response = await axios.post(API.UPDATE_LEVEL_OF_CLEARANCE, data, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });    
            return response.data      
        },
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.error(error)
        },
    });


    const handleOptionChangeCheckbox = (e) =>{
        const { value, checked } = e.target;

        const updatedCheckbox = checked
        ? [...checkbox, value]
        : checkbox.filter(item => item !== value);

        setChekbox(updatedCheckbox);

        const  levelOfClearance = {LevelOfClearance:checkbox}
        mutationlevelOfClearance.mutate(levelOfClearance);
    }    

    return(
        <section className="profile__security">
            <section className="profile__security__active">
                <RadioButtonComponent 
                    name="active-security"
                    text={"Do you have an active security clearance?"}
                    handleOptionChange={handleOptionChange}
                    selectedOption={selectedOption.securityClearance}
                />

            </section>
            <div className="profile__security__divider"></div>
            <section className="profile__security__agency">
                <h3 className="profile__security__agency__title">If yes, please select issuing agency and level of clearance held (e.g/ DoD Secret)</h3>
                <div className="profile__security__agency__container">
                    {SecurityClearanceLevel.map((security) => (
                    <div 
                        className="profile__security__agency__container__checkbox"
                        key={security.id} 
                    >
                        <input
                            className="profile__security__agency__container__checkbox__input"
                            type="checkbox"
                            name="security"
                            value={security.value}
                            checked={checkbox.includes(security.value)}
                            onChange={handleOptionChangeCheckbox}
                        />
                        <label htmlFor="security" className="profile__security__agency__container__checkbox__label">
                            {security.label} 
                        </label>
                    </div>
                    ))}
                </div>
            </section>
        </section>
    )
}