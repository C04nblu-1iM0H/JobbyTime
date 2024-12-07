import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import icon from '../../../assets/Signup/icon_button.svg'
import {validateInputs} from '../../../utils/validate';
import { API } from '../../../const';
import { useNavigate } from 'react-router-dom';

export default function SignupForm({SetIsDataSuccess}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate() 

    const addUser = useMutation({
        mutationFn: async ({firstName, lastName, email, password }) => {
            const response = await axios.post(API.SEND_VERIFY_CODE, {firstName, lastName, email, password },{ withCredentials: true });
            return response.data
        },
        onSuccess: (response) => {            
            if(response === true){
                SetIsDataSuccess(true)
            }else if(response === false){
                errors.email = "Such an email already exists.";
                setTimeout(() => {
                    navigate('/login');
                }, 4000);
                
            }
        },
        onError: (error) => {
            console.error('Error adding user:', error);
        },
    });

    const handleSendingData = (e) =>{
        e.preventDefault();
        const validationErrors = validateInputs(firstName, lastName, email, password);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }
          setErrors({});
        addUser.mutate({firstName, lastName, email, password });
    }

    const handleLastName = (e) => setLastName(e.target.value);
    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);


    return (
        <form  onSubmit={handleSendingData} className="signup__form">
            <div className='group-fullname'>
                <div className="signup__form__group">
                    <label className="signup__form__group__label">First Name</label>
                    <input 
                        className={`signup__form__group__input ${
                            errors.firstName ? "signup__form__group__input__error" : ""
                        }`} 
                        type="text" 
                        placeholder="Enter your First Name"
                        onChange={handleFirstName}
                        value={firstName}
                    />
                    {errors.firstName && (
                        <span className="signup__form__group__error-message">{errors.firstName}</span>
                    )}
                </div>
                <div className="signup__form__group">
                    <label className="signup__form__group__label">Last Name</label>
                    <input 
                        className={`signup__form__group__input ${
                            errors.lastName ? "signup__form__group__input__error" : ""
                        }`} 
                        type="text" 
                        placeholder="Enter your Last Name"
                        onChange={handleLastName}
                        value={lastName}
                    />
                    {errors.lastName && (
                        <span className="signup__form__group__error-message">{errors.lastName}</span>
                    )}
                </div>
            </div>
            <div className="signup__form__group">
                <label className="signup__form__group__label">Email</label>
                <input 
                    className={`signup__form__group__input ${
                        errors.email ? "signup__form__group__input__error" : ""
                    }`} 
                    type="email" 
                    placeholder="Enter your Email"
                    onChange={handleEmail}
                    value={email}
                />
                {errors.email && (
                    <span className="signup__form__group__error-message">{errors.email}</span>
                )}
            </div>
            <div className="signup__form__group">
                <label className="signup__form__group__label">Password</label>
                <input 
                    className={`signup__form__group__input ${
                        errors.password ? "signup__form__group__input__error" : ""
                    }`} 
                    type="password" 
                    placeholder="Enter your Password" 
                    onChange={handlePassword}
                    value={password}
                />
                {errors.password && (
                    <span className="signup__form__group__error-message">{errors.password}</span>
                )}
            </div>
            <button className="signup__form__button" type="sumbit">
                <span className="signup__form__button__description">NEXT STEP</span>
                <img className="signup__form__button__icon" src={icon} alt="icon"/>
            </button>
        </form>
    );
}