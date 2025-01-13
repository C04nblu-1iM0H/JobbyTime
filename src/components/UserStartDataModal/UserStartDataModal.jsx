import { useEffect, useState } from "react"
import arrow_bottom from "../../assets/profile/arrow_bottom.svg";
import PhoneInputComponent from "../form/PhoneInput/PhoneInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { API, AppRouting } from "../../const";
import { setSteps } from "../../store/stepSlice";
import FormFieldProfile from "../form/FormFieldProfile/FormFieldProfile";
import StepStatus from "../StepStatus/StepStatus";
import DateInput from "../form/DataPicker/DateInput";
import Loader from "../loader/loader";
import { ValidateUserData } from "../../utils/validate";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";
import { setUserData } from "../../store/userSlice";

export default function UserStartDataModal({width}){
    const dispatch = useDispatch();
    const currentRoute = useLocation().pathname;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        countryCode: "",
        phoneNumber: "",
        birthday: "",
        selectedCountry: "United States",
        state: "",
        city: "",
        linkedIn:"",
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const token = useSelector(state => state.token.token);
    const userData = useSelector(state => state.user.userData);

    useEffect(()=>{
        if(userData && Object.keys(userData).length > 0){
            setFormData((prevData) =>({
                ...prevData,
                ...userData
            }));
        }
    }, [userData])

    const userDataMutate = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(API.RESUME_FROM, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });          
            return response  
        },
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.error('Error sending data:', error);
        },
        onSettled: () => {
            setIsLoading(false);
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    const handleCountryCode = (value) => {
        setFormData((prevData) => ({ ...prevData, countryCode: value })); 
    };
    
    const handleBirthday = (value) => {
        setFormData((prevData) => ({ ...prevData, birthday: value }));
    };

    const handleClose = () =>{
        // if(currentRoute === AppRouting.Onboard) dispatch(setSteps({ step: 'step0', value: false }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // if(currentRoute === AppRouting.Onboard){
        //     dispatch(setSteps({ step: 'step0', value: false }));
        //     dispatch(setSteps({ step: 'step1', value: true }));
        // }
        const validationErrors = ValidateUserData(formData.firstName, formData.lastName, formData.phoneNumber, formData.birthday, formData.city, formData.state, formData.postal);
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        
        const fullPhoneNumber = `${formData.countryCode}-${formData.phoneNumber}`;

        const dataToSend = {
            ...formData,
            phoneNumber: fullPhoneNumber, 
        };

        const formDataToSend = new FormData();

        Object.keys(dataToSend).forEach((key) => {
            formDataToSend.append(key, dataToSend[key]);
        });
        Object.entries(dataToSend).forEach(([key, value]) => {
            dispatch(setUserData({ data: key, value: value || "" }));
        }); 
        for (let [key, value] of formDataToSend) {
            console.log(`${key} - ${value}`)
        }

        setIsLoading(true);
        userDataMutate.mutate(formDataToSend);
    };
    
    if (isLoading) {
        return <Loader/>;
    }

    return(
        <section className="modal">
            <div 
                className="modal__container"
                style={{width}}
            >
                {currentRoute === AppRouting.Onboard && (<StepStatus />)}
                <h1 className="modal__container__title">Confirm your data</h1>
                <form
                    onSubmit={handleSubmit} 
                    className="profile__container__information__findings__form"
                    style={{
                        marginTop:"20px"
                    }}   
                >
                    <div 
                        className="profile__container__information__findings__form__basic"
                        style={{
                            marginTop:"20px"
                        }}   
                    >
                        <FormFieldProfile
                            label="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            errors={errors.firstName} 
                        />
                        <FormFieldProfile
                            label="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                            errors={errors.lastName} 
                        />
                        <PhoneInputComponent
                            name="phoneNumber"
                            code={formData.countryCode}
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            onCountryCodeChange={handleCountryCode}
                            placeholder="Enter your phone"
                            errors={errors.phoneNumber} 
                        />
                        <DateInput 
                            value={formData.birthday}
                            onBirthdayChange={handleBirthday}
                            errors={formData.birthday}
                        />
                    </div>
                    <div className="profile__container__information__findings__form__basic">
                        <div className="profile__container__information__findings__form__basic__group">
                            <label className="profile__container__information__findings__form__basic__group__label">Country</label>
                            <div className="profile__container__information__findings__form__basic__group__block">
                                <select 
                                    name="city" 
                                    id="city-select"
                                    className="profile__container__information__findings__form__basic__group__block__select"
                                    value={formData.selectedCountry}
                                    onChange={handleInputChange}
                                >
                                    <option value="unitedStates">United States</option>
                                </select>
                                <img src={arrow_bottom} alt="arrow_icon" className="arrow_bottom" />
                            </div>
                        </div>
                        <FormFieldProfile
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Enter your state"
                            errors={errors.state} 
                        />
                        <FormFieldProfile
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Enter your city"
                            errors={errors.city} 
                        />
                        <FormFieldProfile
                            label="LinkedIn"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleInputChange}
                            placeholder="Enter your LinkedIn"
                            errors={errors.postal} 
                        />
                    </div>
                    <section className="modal__footer">
                        <ButtonComponent
                            type="button" 
                            ClickFunction={handleClose} 
                            classNameButton="modal__footer__button" 
                            textButton="Close"
                        />
                        <ButtonComponent
                            type="sumbit" 
                            classNameButton="modal__footer__button" 
                            textButton="Save and Contionue"
                        />
                    </section>
                </form>
            </div>
        </section>
    )
}