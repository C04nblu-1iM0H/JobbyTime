import { useMutation } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Verify from '../../components/verify/verify';
import Signup from '../../components/signup/signup';
import logo from '../../assets/logo.svg'
import { API } from '../../const';
import './signup.scss'

function SignupScreen(){
    const [isDataSuccess, SetIsDataSuccess] = useState(false);
    // const [hasExecuted, setHasExecuted] = useState(false);
    // const navigate = useNavigate();

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
            { !isDataSuccess?
                   <Signup SetIsDataSuccess={SetIsDataSuccess} />
                   :
                   <Verify />
            }
        </>
    );
}

export default SignupScreen;