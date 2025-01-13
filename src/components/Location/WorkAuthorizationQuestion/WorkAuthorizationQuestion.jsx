import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import RadioButtonComponent from "../RadioButtonComponent/RadioButtonComponent";
import { API } from "../../../const";
import { setUserData } from "../../../store/userSlice";


export default function WorkAuthorizationQuestion(){
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState({
        WorkAuthorizationQuestion:null
    });
    const token = useSelector(state => state.token.token);  

    const storedWorkAuthorizationQuestion= useSelector((state) => state.user.userData.WorkAuthorizationQuestion);


    useEffect(() => {
        if (storedWorkAuthorizationQuestion !== null) {
            setSelectedOption({ WorkAuthorizationQuestion: storedWorkAuthorizationQuestion });
        }
    }, [storedWorkAuthorizationQuestion]);
        

    const mutation = useMutation({
        mutationFn: async (option) => {
            const response = await axios.post(API.UPDATE_WORK_AUTHORIZATION, option, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });    
            return response.data      
        },
        onSuccess: (response) => {
            dispatch(setUserData({ data: "LocationCheckUSA", value: response.LocationCheckUSA })); 
        },
        onError: (error) => {
            console.error(error)
        },
    });

    const handleOptionChangeWork = (option) => {
        setSelectedOption({ WorkAuthorizationQuestion: option });
        console.log(selectedOption);
        const requestData = { WorkAuthorizationQuestion: option };
        mutation.mutate(requestData);

    };
    return(
        <section className="profile__location__block">
            <RadioButtonComponent 
                name="work-authorization"
                text={"Are you authorized to work in the United States?"}
                handleOptionChange={handleOptionChangeWork}
                selectedOption={selectedOption.WorkAuthorizationQuestion}
            />
        </section>
    )
}