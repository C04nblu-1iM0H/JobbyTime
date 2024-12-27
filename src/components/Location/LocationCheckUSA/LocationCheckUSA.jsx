import axios from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import RadioButtonComponent from "../RadioButtonComponent/RadioButtonComponent";
import { API } from "../../../const";


export default function LocationCheckUSA(){
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

    const handleOptionChangeUSA = (option) => {
        setSelectedOption(option);
        console.log(option);
        
        // mutation.mutate({ option });
    };

    return(
        <section className="profile__location__block">
            <RadioButtonComponent 
                name="usa-location"
                text={"Are you currently located in the United States?"}
                handleOptionChange={handleOptionChangeUSA}
                selectedOption={selectedOption}
            />
        </section>

    )
}