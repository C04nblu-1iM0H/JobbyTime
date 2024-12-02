import { Link } from "react-router-dom";

function SignupButtons({buttons}){
    return(
        buttons.map((button, id) => (
            <li className="signup__list__item" key={id}>
                <Link className="signup__list__item__button" to={button.root}>
                    <img className="signup__list__item__button__img" src={button.icon} alt='icon'/>
                    <span className="signup__list__item__button__text">{button.description}</span>
                </Link>
            </li>
        ))
    );
}

export default SignupButtons;