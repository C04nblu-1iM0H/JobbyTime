import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import LoginForm from '../../components/form/LoginForm/LoginForm';
import SignupButtons from '../../components/button/SignupButton/SignupButtons';
import { AppRouting, SignupButton } from '../../const';
import logo from '../../assets/logo.svg'
import { API } from '../../const';
import './login.scss'

function LoginScreen(){
    const navigate = useNavigate();
    // const [hasExecuted, setHasExecuted] = useState(false);

    // const isBot = useMutation({
    //     mutationFn: async ({getToken}) => {
    //         const response = await fetch(API.IS_BOT, {
    //             method: 'POST',
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 token: getToken, 
    //             })
    //         });
    //         return response.json();
    //     },
    //     onSuccess: (response) => {
    //         console.log(response);
    //         if(response.is_people === false){
    //             navigate('/is-bot');
    //         }
    //     },
    //     onError: (error) => {
    //         console.error("Error is bot data:", error);
    //     },
    // });

    // useEffect(() => {
    //     if (!hasExecuted) {
    //         grecaptcha.enterprise.ready(async () => {
    //             const getToken = await grecaptcha.enterprise.execute(
    //                 '6LddPHUqAAAAAN-kXKpfeIMZBtI9SVCeRF1hkxN2', 
    //                 { action: 'LOGIN' }
    //             );
    //             await isBot.mutateAsync({ getToken });
    //             setHasExecuted(true);
    //         });
    //     }
    // }, [hasExecuted]); 

    return(
        <>
            <div className="header">
                <img  className="header__logo" src={logo} alt="logo" />
            </div>
            <section className="login">
                <h1 className="login__title">
                    <Link className="login__title__link" to={AppRouting.Root}>Sign up </Link>
                     /   
                    <span> Login in</span> 
                </h1>
                <div className="login__item">
                    <SignupButtons buttons={SignupButton}/> 
                </div>
                <div className="login__divider">
                    <span>Or</span>
                </div>
                <LoginForm />
                <div className='login__TermsOfUse'>
                    <Link to={AppRouting.CheckingMail} className='login__TermsOfUse__link'>Forgot my password</Link>
                </div>
            </section>
        </>
    );
}

export default LoginScreen;