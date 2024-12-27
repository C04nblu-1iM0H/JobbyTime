import { countries } from "../../../const";

export default function AdditionalForm({setAdditionalData, handleAdditionalDataChange, errors}){
    console.log(errors);
    
    return(
        <>
            <div className="modal__form__container">
                <div className="modal__form__container__group-additional">
                    <label className="modal__form__container__group-additional__label">First name</label>
                    <input 
                        className={`modal__form__container__group-additional__input ${
                            errors.firstName ? "modal__form__container__group-additional__input__error" : ""
                        }`}  
                        type="text"
                        value={setAdditionalData.firstName}
                        onChange={(e) => handleAdditionalDataChange("firstName", e.target.value)}
                        placeholder="Enter a first name"
                    />
                    {errors.firstName && (
                        <span className="modal__form__container__group-additional__error-message">{errors.firstName}</span>
                    )}
                </div>
                <div className="modal__form__container__group-additional">
                    <label className="modal__form__container__group-additional__label">Last name</label>
                    <input 
                        className={`modal__form__container__group-additional__input ${
                            errors.lastName ? "modal__form__container__group-additional__input__error" : ""
                        }`}  
                        type="text"
                        value={setAdditionalData.lastName}
                        onChange={(e) => handleAdditionalDataChange("lastName", e.target.value)}
                        placeholder="Enter a last name"
                    />
                    {errors.lastName && (
                        <span className="modal__form__container__group-additional__error-message">{errors.lastName}</span>
                    )}
                </div>
                <div className="modal__form__container__group-additional">
                    <label className="modal__form__container__group-additional__label">Country</label>
                    <select 
                        className="modal__form__container__group-additional__select"
                        name="experienceLevel"
                        value={setAdditionalData.country}
                        onChange={(e) =>handleAdditionalDataChange("country", e.target.value)}
                    >
                        {countries.map((country, index) => {
                            const {name} = country;
                            return(
                                <option key={index} value={name}> 
                                    {name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className="modal__form__container__group-additional">
                    <label className="modal__form__container__group-additional__label">City</label>
                    <input 
                        className={`modal__form__container__group-additional__input ${
                            errors.city ? "modal__form__container__group-additional__input__error" : ""
                        }`}  
                        type="text"
                        value={setAdditionalData.city}
                        onChange={(e) => handleAdditionalDataChange("city", e.target.value)}
                        placeholder="Specify the city"
                    />
                    {errors.city && (
                        <span className="modal__form__container__group-additional__error-message">{errors.city}</span>
                    )}
                </div>
            </div>
            <hr className="modal__form__hr" />
        </>
    )
}