import { Link } from "react-router-dom"
import SignupButtons from "../button/SignupButton/SignupButtons"
import { SignupButton, AppRouting } from "../../const"
import SignupForm from '../form/SignupForm/SignupForm';
import { useState } from "react";
import Loader from "../loader/loader";

export default function Signup({SetIsDataSuccess}){
    const [isLoading, setIsLoading] = useState(false);
    return(
        <>
            { isLoading && (<Loader />)}
            <section className="signup">
                <h1 className="signup__title">
                    <span>Sign up </span> 
                     /   
                    <Link className="signup__title__link" to={AppRouting.Login}> Login in</Link>
                </h1>
                <SignupButtons buttons={SignupButton}/>
                <div className="signup__divider">
                    <span>Or</span>
                </div>

                <SignupForm SetIsDataSuccess={SetIsDataSuccess} setIsLoading={setIsLoading}/>
                <div className='signup__TermsOfUse'>
                    <p className='signup__TermsOfUse__description'>By signing up, you agree to </p>
                    <Link className='signup__TermsOfUse__link'>Terms of Use</Link>
                </div>
            </section>
        </>

    )
}