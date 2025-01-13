import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import RadioButtonComponent from "../RadioButtonComponent/RadioButtonComponent";
import { API } from "../../../const";
import { setUserData } from "../../../store/userSlice";


export default function LocationCheckUSA(){
    const dispatch = useDispatch();

    const storedLocationCheckUSA = useSelector((state) => state.user.userData.LocationCheckUSA);
    
    const [selectedOption, setSelectedOption] = useState({
        LocationCheckUSA: storedLocationCheckUSA ?? null
    });
    const token = useSelector(state => state.token.token);  

    useEffect(() => {
        if (storedLocationCheckUSA !== null) {
            setSelectedOption({ LocationCheckUSA: storedLocationCheckUSA });
        }
    }, [storedLocationCheckUSA]);

    const mutation = useMutation({
        mutationFn: async (option) => {
            console.log(option);
            
            const response = await axios.post(API.UPDATE_LOCATION_USA, option, {
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

    const handleOptionChangeUSA = (option) => {
        setSelectedOption({ LocationCheckUSA: option  });
        console.log(selectedOption);
        const requestData = { LocationCheckUSA: option };
        mutation.mutate(requestData);
    };

    return(
        <section className="profile__location__block">
            <RadioButtonComponent 
                name="usa-location"
                text={"Are you currently located in the United States?"}
                handleOptionChange={handleOptionChangeUSA}
                selectedOption={selectedOption.LocationCheckUSA}
            />
        </section>
    )
}