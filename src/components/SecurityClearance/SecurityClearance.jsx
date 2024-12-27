import axios from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import RadioButtonComponent from "../Location/RadioButtonComponent/RadioButtonComponent";
import { API, SecurityClearanceLevel } from "../../const";

export default function SecurityClearance(){
    const [selectedOption, setSelectedOption] = useState(null);
    const [checkbox, setChekbox] = useState([]);
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

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        console.log(option);
        
        // mutation.mutate({ option });
    };

    const handleOptionChangeCheckbox = (e) =>{
        const { value, checked } = e.target;
        checked ? setChekbox([...checkbox, value]) : setChekbox(checkbox.filter(item => item !== value));
    }

    console.log(checkbox);
    
    

    return(
        <section className="profile__security">
            <section className="profile__security__active">
                <RadioButtonComponent 
                    name="active-security"
                    text={"Do you have an active security clearance?"}
                    handleOptionChange={handleOptionChange}
                    selectedOption={selectedOption}
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