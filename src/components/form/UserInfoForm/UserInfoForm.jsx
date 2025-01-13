import axios from "axios";
import { useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormFieldProfile from "../FormFieldProfile/FormFieldProfile";
import ButtonComponent from "../../button/ButtonComponent/ButtonComponent";
import PhoneInputComponent from "../PhoneInput/PhoneInput";
import Loader from "../../loader/loader";
import DateInput from "../DataPicker/DateInput";
import arrow_bottom from "../../../assets/profile/arrow_bottom.svg";
import { IoMdClose } from "react-icons/io";
import { setSteps } from "../../../store/stepSlice";
import { API, AppRouting } from "../../../const";
import { ValidateUserData } from "../../../utils/validate";
import { setUserData } from "../../../store/userSlice";

export default function UserInfoForm({SetActiveForm}){
    const dispatch = useDispatch()
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
        postal: "",
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
    
    const handleClose = () => SetActiveForm(false);

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
        return <Loader />;
    }   

    return(
        <section className="profile__container__information__findings">
            <h2 className="profile__container__information__findings__title">My Profile Info</h2>
            <div className="profile__container__information__findings__close">
                <IoMdClose onClick={()=>SetActiveForm(false)}/>
            </div>
            <form
                onSubmit={handleSubmit} 
                className="profile__container__information__findings__form">
                <div className="profile__container__information__findings__form__basic">
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
                        placeholder="enter your phone"
                        errors={errors.phoneNumber} 
                    />
                    <DateInput
                        value={formData.birthday}
                        onBirthdayChange={handleBirthday}
                        errors={formData.birthday}
                    />
                </div>
                <h3 className="profile__container__information__findings__form__title">Location</h3>
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
                                <option value="United States">United States</option>
                            </select>
                            <img src={arrow_bottom} alt="arrow_icon" className="arrow_bottom" />
                        </div>
                    </div>
                    <FormFieldProfile
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="enter your state"
                        errors={errors.state} 
                    />
                    <FormFieldProfile
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="enter your city"
                        errors={errors.city} 
                    />
                    <FormFieldProfile
                        label="Postal"
                        name="postal"
                        value={formData.postal}
                        onChange={handleInputChange}
                        placeholder="enter your postal"
                        errors={errors.postal} 
                    />
                </div>
                <div className="profile__container__information__findings__form__buttons">
                    <ButtonComponent 
                        ClickFunction={handleClose} 
                        classNameButton="profile__container__information__findings__form__buttons__btn" 
                        textButton="Close"
                        classNameText="profile__container__information__findings__form__buttons__text" 
                    />
                    <ButtonComponent 
                        type="sumbit" 
                        classNameButton="profile__container__information__findings__form__buttons__btn" 
                        textButton="Save"
                        classNameText="profile__container__information__findings__form__buttons__text" 
                    />
                </div>
            </form>
        </section>
    )
}