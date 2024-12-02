import React, { useState } from "react";
import { countries } from "../../../const";
import "./PhoneInput.scss"

const PhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+1",
    flag: "🇺🇸",
  });
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  return (
    <div className="container">
        <label htmlFor="phone-input" className="container__label">
            Phone number
        </label>
        <div className="container__inputs">
            <div className="container__input__dropdown" >
                <button className="container__input__dropdown__button">
                    <span>{selectedCountry.flag}</span>
                    <span>{selectedCountry.code}</span>
                </button>
            <div className="container__input__dropdown__content">
            {countries.map((country, index) => (
                <div
                    key={index}
                    className="container__input__dropdown__content__item"
                    onClick={() => handleCountryChange(country)}
                >
                    <span>{country.flag}</span>
                    <span>{country.code}</span> {country.name}
                </div>
            ))}
            </div>
        </div>
        <input
            type="text"
            id="phone-input"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="container__input"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
