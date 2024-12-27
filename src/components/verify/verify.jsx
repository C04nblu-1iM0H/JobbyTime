import { Link } from 'react-router-dom';
import VerifyForm from '../form/VerifyForm/VerifyForm';
import SendNewCode from '../SendNewCode/SendNewCode';
import './verify.scss';
import { useState } from 'react';
import Loader from '../loader/loader';

export default function Verify({sessionCookie}){
    const [isLoading, setIsLoading] = useState(false);
    
    return(
        <>
            { isLoading && (<Loader />)}
            <section className="verify">
                <h1 className="verify__title">Sign up</h1>
                <p className="verify__description">Enter the verification code sent to your email</p>
                <VerifyForm sessionCookie={sessionCookie} setIsLoading={setIsLoading}/>
                <div className="verify__change-adress">
                    <Link className="verify__change-adress__link">Change Email adress</Link>
                </div>
            </section>
            <div className="block">
                <p className="block__description">If you haven't received the code, check the Spam folder</p>
            </div>
            <div className="divider">
                <span>Or</span>
            </div>
            <SendNewCode />
        </>
    )
}