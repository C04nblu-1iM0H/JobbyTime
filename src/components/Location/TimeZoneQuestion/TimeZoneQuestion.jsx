import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { timeZones } from "../../../const";
import { API } from "../../../const";
import { setUserData } from "../../../store/userSlice";


export default function TimeZoneQuestion(){
    const dispatch = useDispatch()
    const [selectedTimeZone, setSelectedTimeZone] = useState({
        TimeZoneQuestion:null
    });
    const storedTimeZone= useSelector((state) => state.user.userData.selectedTimeZone);

    const token = useSelector(state => state.token.token);  

    useEffect(() => {
        if (storedTimeZone !== null) {
            setSelectedTimeZone({ TimeZoneQuestion: storedTimeZone });
        }
    }, [storedTimeZone]);
    

    const mutation = useMutation({
        mutationFn: async (timeZone) => {
            const response = await axios.post(API.UPDATE_TIMEZONE, timeZone, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });    
            return response.data      
        },
        onSuccess: (response) => {
            dispatch(setUserData({ data: "selectedTimeZone", value: response.selectedTimeZone })); 

        },
        onError: (error) => {
            console.error(error)
        },
    });

    const handleOptionChange = (timeZone) => {
        setSelectedTimeZone({ TimeZoneQuestion: timeZone });        
        const payload = {
            TimeZone: timeZone
        };
        mutation.mutate(payload);
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
                        checked={selectedTimeZone.TimeZoneQuestion === zone.value}
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