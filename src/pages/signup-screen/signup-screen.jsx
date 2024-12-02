import logo from '../../assets/logo.svg'
import { useState } from 'react';
import './signup.scss'
import Verify from '../../components/verify/verify';
import Signup from '../../components/signup/signup';


function SignupScreen(){
    const [isDataSuccess, SetIsDataSuccess] = useState(false);
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