import { useState } from "react"
import arrow_bottom from "../../../assets/profile/arrow_bottom.svg";
import { IoMdClose } from "react-icons/io";
import FormFieldProfile from "../FormFieldProfile/FormFieldProfile";
import DataPicker from "../DataPicker/DataPicker";
import ButtonComponent from "../../button/ButtonComponent/ButtonComponent";
import PhoneInputComponent from "../PhoneInput/PhoneInput";

export default function UserInfoForm({SetActiveForm}){
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleClose = () => SetActiveForm(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullPhoneNumber = `${formData.countryCode}${formData.phoneNumber}`;
    
        const dataToSend = {
            ...formData,
            phoneNumber: fullPhoneNumber, 
        };
        console.log("Данные для отправки:", dataToSend);
    };

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
                        placeholder="enter your phone"
                    />
                    <DataPicker />
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
                                <option value="unitedStates">United States</option>
                            </select>
                            <img src={arrow_bottom} alt="arrow_icon" className="arrow_bottom" />
                        </div>
                    </div>
                    <FormFieldProfile
                        label="State"
                        value={formData.state}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "state" } })}
                        placeholder="enter your state"
                    />
                    <FormFieldProfile
                        label="City"
                        value={formData.city}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "city" } })}
                        placeholder="enter your city"
                    />
                    <FormFieldProfile
                        label="Postal"
                        value={formData.postal}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "postal" } })}
                        placeholder="enter your postal"
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