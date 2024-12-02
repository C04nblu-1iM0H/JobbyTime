import { Link } from 'react-router-dom';
import LoginForm from '../../components/form/LoginForm/LoginForm';
import SignupButtons from '../../components/button/SignupButton/SignupButtons';
import { AppRouting, SignupButton } from '../../const';
import logo from '../../assets/logo.svg'
import './login.scss'

function LoginScreen(){
    return(
        <>
            <div className="header">
                <img  className="header__logo" src={logo} alt="logo" />
            </div>
            <section className="login">
                <h1 className="login__title">Welcome</h1>
                <div className="login__item">
                    <SignupButtons buttons={SignupButton}/> 
                </div>
                <div className="login__divider">
                    <span>Or</span>
                </div>
                <LoginForm />
                <div className='login__TermsOfUse'>
                    <Link className='login__TermsOfUse__link'>Forgot my password</Link>
                </div>
            </section>
            <div className='footer'>
                <p className='footer__description'>First time?</p>
                <Link className='footer__link' to={AppRouting.Root}>Sign up</Link>
            </div>
        </>
    );
}

export default LoginScreen;