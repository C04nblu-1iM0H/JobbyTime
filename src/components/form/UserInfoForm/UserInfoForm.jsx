import { useState } from "react"
import PhoneInput from "../PhoneInput/PhoneInput";
import arrow_bottom from "../../../assets/profile/arrow_bottom.svg";
import { IoMdClose } from "react-icons/io";
import FormFieldProfile from "../FormFieldProfile/FormFieldProfile";
import DataPicker from "../DataPicker/DataPicker";


export default function UserInfoForm({SetActiveForm}){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
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

    return(
        <section className="profile__container__information__findings">
            <h2 className="profile__container__information__findings__title">My Profile Info</h2>
            <div className="profile__container__information__findings__close">
                <IoMdClose onClick={()=>SetActiveForm(false)}/>
            </div>
            <form className="profile__container__information__findings__form">
                <div className="profile__container__information__findings__form__basic">
                    <FormFieldProfile
                        label="First name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "firstName" } })}
                    />
                    <FormFieldProfile
                        label="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "lastName" } })}
                    />
                    <FormFieldProfile
                        label="Phone number"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "phoneNumber" } })}
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
                    />
                    <FormFieldProfile
                        label="City"
                        value={formData.city}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "city" } })}
                    />
                    <FormFieldProfile
                        label="Postal"
                        value={formData.postal}
                        onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "postal" } })}
                    />
                </div>
            </form>
        </section>
    )
}