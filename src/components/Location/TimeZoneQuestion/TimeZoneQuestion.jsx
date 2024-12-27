import axios from "axios";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { timeZones } from "../../../const";
import { API } from "../../../const";


export default function TimeZoneQuestion(){
    const [selectedTimeZone, setSelectedTimeZone] = useState(null);
    const token = useSelector(state => state.token.token);  

    const mutation = useMutation({
        mutationFn: async ({timeZone}) => {
            await axios.post(API.RESUME_FROM, {timeZone}, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });          
        }
    });

    const handleOptionChange = (timeZone) => {
        setSelectedTimeZone(timeZone)
        console.log(timeZone);
        
        // mutation.mutate({ timeZone });
    };
    return(
        <section className="profile__location__container Three">
            <p className="profile__location__container__title">What US time zone are you located in?</p>
            <div className="profile__location__container__radio-buttons">
                {timeZones.map((zone) => (
                <div 
                    className="profile__location__container__radio-buttons__block"
                    key={zone.value} 
                >
                    <input
                        className="profile__location__container__radio-buttons__input"
                        type="radio"
                        name="timeZone"
                        value={zone.value}
                        checked={selectedTimeZone === zone.value}
                        onChange={() => handleOptionChange(zone.value)}
                    />
                    <div className="profile__location__container__radio-buttons__descriptions">
                        <label className="profile__location__container__radio-buttons__descriptions__label">
                            {zone.label} 
                        </label>
                        <span className="profile__location__container__radio-buttons__descriptions__text">({zone.location})</span>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}