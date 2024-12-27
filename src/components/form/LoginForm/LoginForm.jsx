import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import icon from '../../../assets/Signup/icon_button.svg'
import { API } from '../../../const';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../../store/tokenSlice';

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addUser = useMutation({
        mutationFn: async ({email, password}) => {
            const data = new URLSearchParams();
            data.append("grant_type", "password");
            data.append("username", email);
            data.append("password", password);
            data.append("scope", "");
            data.append("client_id", "string");
            data.append("client_secret", "string");

            const response = await axios.post(API.GET_TOKEN, data, {
                headers: {
                    'accept': 'application/json',
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });            
           return response.data;
        },
        onSuccess: (response) => {
            console.log(response);
            
            if(response === false ){
                setErrors("You have entered an incorrect username or password");
                return;
            }
            
            dispatch(setAccessToken(response.access_token));
            navigate('/onboard');
        },
        onError: (error) => {
            console.error('Error adding user:', error);
        },
    });

    const handleSendingData = (e) =>{
        e.preventDefault();
        addUser.mutate({ email, password });
    }

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    
    return (
        <form className="login__form" onSubmit={handleSendingData}>
            <div className="login__form__group">
                <label className="login__form__group__label">Email</label>
                <input 
                    className={`login__form__group__input ${
                        errors ? "login__form__group__input__error" : ""
                    }`} 
                    type="email" 
                    placeholder="Enter your Email"
                    onChange={handleEmail}
                    value={email}
                />
            </div>
            <div className="login__form__group">
                <label className="login__form__group__label">Password</label>
                <input 
                    className={`login__form__group__input ${
                        errors ? "login__form__group__input__error" : ""
                    }`}  
                    type="password" 
                    placeholder="Enter your Password"
                    onChange={handlePassword}
                    value={password}
                />
                {errors && (
                    <span className="login__form__group__error-message">{errors}</span>
                )}
            </div>

            <button className="login__form__button" type="sumbit">
                <span className="login__form__button__description">LOG IN</span>
                <img className="login__form__button__icon" src={icon} alt="icon"/>
            </button>
        </form>
    );
}