import axios from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import RadioButtonComponent from "../RadioButtonComponent/RadioButtonComponent";
import { API } from "../../../const";


export default function WorkAuthorizationQuestion(){
    const [selectedOption, setSelectedOption] = useState(null);
    const token = useSelector(state => state.token.token);  
    
    const mutation = useMutation({
        mutationFn: async ({option}) => {
            await axios.post(API.RESUME_FROM, option, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });          
        }
    });

    const handleOptionChangeWork = (option) => {
        setSelectedOption(option);
        console.log(option);
        
        // mutation.mutate({ option });
    };
    return(
        <section className="profile__location__block">
            <RadioButtonComponent 
                name="work-authorization"
                text={"Are you authorized to work in the United States?"}
                handleOptionChange={handleOptionChangeWork}
                selectedOption={selectedOption}
            />
        </section>
    )
}