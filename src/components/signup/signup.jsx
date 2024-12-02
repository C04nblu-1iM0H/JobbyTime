import { Link } from "react-router-dom"
import SignupButtons from "../button/SignupButton/SignupButtons"
import { SignupButton, AppRouting } from "../../const"
import SignupForm from '../form/SignupForm/SignupForm';

export default function Signup({SetIsDataSuccess}){
    return(
        <>
            <section className="signup">
                <h1 className="signup__title">Sign up</h1>
                <ul className="signup__list">
                    <SignupButtons buttons={SignupButton}/>
                </ul>
                <div className="signup__divider">
                    <span>Or</span>
                </div>

                <SignupForm SetIsDataSuccess={SetIsDataSuccess}/>
                <div className='signup__TermsOfUse'>
                    <p className='signup__TermsOfUse__description'>By signing up, you agree to </p>
                    <Link className='signup__TermsOfUse__link'>Terms of Use</Link>
                </div>
            </section>
            <div className='footer'>
                <p className='footer__description'>Already have an account?</p>
                <Link className='footer__link' to={AppRouting.Login}>Log in</Link>
            </div>
        </>

    )
}