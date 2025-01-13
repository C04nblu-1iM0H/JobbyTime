import { useEffect, useState } from 'react';
import contry from '../../../assets/profile/contry.svg';
import arrow_bottom from '../../../assets/profile/arrow_bottom.svg';


const countryData = [
    { code: "1", flag: contry },
    // { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    // { code: "+49", name: "Germany", flag: "🇩🇪" },
    // { code: "+7", name: "Russia", flag: "🇷🇺" },
    // { code: "+33", name: "France", flag: "🇫🇷" },
];


export default function PhoneInputComponent({
    name, 
    code,
    onCountryCodeChange,
    value, 
    onChange, 
    placeholder,
    errors
}){
    const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (selectedCountry.code !== code) {
            onCountryCodeChange(selectedCountry.code);
        }
    }, [selectedCountry, code, onCountryCodeChange]);
    
    const handleCountrySelect = (country) => {
      setSelectedCountry(country);
      onCountryCodeChange(country.code);
      setDropdownOpen(false);
    };
    return(
        <div className="container-group">
            <label className="container-group__label">Phone number</label>
                <div 
                    className={`container-group__phone-block ${
                        errors ? "container-group__phone-block__error" : ""
                    }`} 
                >
                    <div
                        className="container-group__phone-block__select"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <img src={selectedCountry.flag} alt="flag-icon"/>
                        <span className="container-group__phone-block__select__code">+{selectedCountry.code}</span>
                        <img 
                            className={`container-group__phone-block__select__arrow ${
                                dropdownOpen ? "open" : ""
                            }`} 
                            src={arrow_bottom} 
                            alt="flag-icon"
                        />
                    </div>
                    {dropdownOpen && (
                        <div className="container-group__phone-block__dropdownMenu">
                        {countryData.map((country) => (
                            <div
                                key={country.code}
                                className="container-group__phone-block__dropdownMenu__item"
                                onClick={() => handleCountrySelect(country)}
                            >
                                <img  className="country-flag" src={selectedCountry.flag} alt="flag-icon"/>
                                <span className="country-code">+{country.code}</span>
                            </div>
                        ))}
                        </div>
                    )}
                    <input
                        name={name}
                        className="profile__container__information__findings__form__basic__group__phone-block__input container-group__phone-block__input"
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        autoComplete="off"
                    />
                </div>
                {errors && (
                    <span className="container-group__error-message">{errors}</span>
                )}
        </div>
    )
}