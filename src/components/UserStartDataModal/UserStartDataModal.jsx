import { useState } from "react"
import arrow_bottom from "../../assets/profile/arrow_bottom.svg";
import PhoneInputComponent from "../form/PhoneInput/PhoneInput";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AppRouting } from "../../const";
import { setSteps } from "../../store/stepSlice";
import FormFieldProfile from "../form/FormFieldProfile/FormFieldProfile";
import StepStatus from "../StepStatus/StepStatus";
import DataPicker from "../form/DataPicker/DataPicker";


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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const fullPhoneNumber = `${formData.countryCode}${formData.phoneNumber}`;

        const dataToSend = {
            ...formData,
            phoneNumber: fullPhoneNumber, 
        };
        console.log("Данные для отправки:", dataToSend);
        if(currentRoute === AppRouting.Onboard){
            dispatch(setSteps({ step: 'step0', value: false }));
            dispatch(setSteps({ step: 'step1', value: true }));
        }
    };

    return(
        <section className="modal">
            <div 
                className="modal__container"
                style={{width}}
            >
                <StepStatus />
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
                            value={formData.firstName}
                            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "firstName" } })}
                            placeholder="Enter your first name"
                        />
                        <FormFieldProfile
                            label="Last name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "lastName" } })}
                            placeholder="Enter your last name"
                        />
                        <PhoneInputComponent
                            code={formData.countryCode}
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "phoneNumber" } })}
                            onCountryCodeChange={(e) =>
                                setFormData((prevData) => ({ ...prevData, countryCode: e.target.value }))
                            }
                            placeholder="Enter your phone"
                        />
                        <DataPicker />
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
                            value={formData.state}
                            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "state" } })}
                            placeholder="Enter your state"
                        />
                        <FormFieldProfile
                            label="City"
                            value={formData.city}
                            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "city" } })}
                            placeholder="Enter your city"
                        />
                        <FormFieldProfile
                            label="LinkedIn"
                            value={formData.linkedIn}
                            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "linkedIn" } })}
                            placeholder="Enter your LinkedIn"
                        />
                    </div>
                    <section className="modal__footer">
                        <button 
                            onClick={()=>dispatch(setSteps({ step: 'step0', value: false }))} 
                            className="modal__footer__button"
                        >
                            Close
                        </button>
                        <button 
                            type="sumbit"
                            className="modal__footer__button"
                            // style={{
                            //     width:"150px"
                            // }}
                        >
                            Save and Contionue
                        </button>
                    </section>
                </form>
            </div>
        </section>
    )
}