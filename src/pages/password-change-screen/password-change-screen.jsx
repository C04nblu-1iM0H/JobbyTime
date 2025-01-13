import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { API } from '../../const';
import icon from '../../assets/Signup/icon_button.svg'
import { validatePassword } from '../../utils/validate';


export default function PasswordChangeScreen(){
    const [errors, setErrors] = useState("");
    const [password, setCurrentPassword] = useState("");
    const [repeatPassword, setRepeatTheCurrentPassword] = useState("");
    const passwordChange = useMutation({
        mutationFn: async (password) => {

            const response = await axios.post(API.GET_TOKEN, password, {
                headers: {
                    'accept': 'application/json',
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });            
           return response.data;
        },
        onSuccess: (response) => {
            console.log(response);    
        },
        onError: (error) => {
            console.error('Error adding user:', error);
        },
    });

    const handlePasswordChange = (e) =>{
        e.preventDefault();
        const validationErrors = validatePassword(password, repeatPassword);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        // passwordChange.mutate(password);
    }
    return(
        <>
            <div className="header">
                <img  className="header__logo" src={logo} alt="logo" />
            </div>
            <section className="forgotMyPassword">
                <h1 className="forgotMyPassword__title">Password change</h1>
                <form className='forgotMyPassword__form' onSubmit={handlePasswordChange}>
                    <div className="forgotMyPassword__form__group">
                        <label className="forgotMyPassword__form__group__label">Password</label>
                        <input 
                            className={`forgotMyPassword__form__group__input ${
                                errors.password ? "forgotMyPassword__form__group__input__error" : ""
                            }`} 
                            type="password" 
                            placeholder="Enter your password"
                            onChange={(e)=> setCurrentPassword(e.target.value)}
                            value={password}
                        />
                        {errors.password && (
                            <span className="forgotMyPassword__form__group__error-message">{errors.password}</span>
                        )}
                    </div>
                    <div className="forgotMyPassword__form__group">
                        <label className="forgotMyPassword__form__group__label">Repeat the password</label>
                        <input 
                            className={`forgotMyPassword__form__group__input ${
                                errors.repeatPassword ? "forgotMyPassword__form__group__input__error" : ""
                            }`} 
                            type="password" 
                            placeholder="Enter your repeat the password"
                            onChange={(e)=> setRepeatTheCurrentPassword(e.target.value)}
                            value={repeatPassword}
                        />
                        {errors.repeatPassword && (
                            <span className="forgotMyPassword__form__group__error-message">{errors.repeatPassword}</span>
                        )}
                    </div>
                    <button className="forgotMyPassword__form__button" type="submit">
                        <span className="forgotMyPassword__form__button__description">NEXT STEP</span>
                        <img className="forgotMyPassword__form__button__icon" src={icon} alt="icon"/>
                    </button>
                </form>
            </section>
        </>
    )
}