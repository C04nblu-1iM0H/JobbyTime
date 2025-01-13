import { useState } from 'react';
import logo from '../../assets/logo.svg'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { API } from '../../const';
import EmailComponent from '../../components/EmailComponent/EmailComponent';
import Verify from '../../components/verify/verify';


export default function EmailScreen(){
        const [email, setEmail] = useState("");
        const [errors, setErrors] = useState("");
        const [isDataSuccess, SetIsDataSuccess] = useState(false);

        const chekingEmail = useMutation({
            mutationFn: async (email) => {
    
                const response = await axios.post(API.GET_TOKEN, email, {
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

        const handleEmail = (e) => setEmail(e.target.value);

        const handleToSendEmail = (e) =>{
            e.preventDefault();
            SetIsDataSuccess(true);
            // chekingEmail.mutate(email);
        }
 
    return(
        <>
            <div className="header">
                <img  className="header__logo" src={logo} alt="logo" />
            </div>
            {
                !isDataSuccess 
                ?(  
                    <EmailComponent 
                        value={email}
                        handleEmail={handleEmail}
                        handleToSendEmail={handleToSendEmail}
                        errors={errors}
                    />
                ):(
                    <Verify />
                )
            }
            
        </>
    );
}