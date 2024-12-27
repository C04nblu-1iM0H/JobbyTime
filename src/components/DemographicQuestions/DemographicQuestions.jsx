import arrow_right from "../../assets/Signup/icon_button.svg";


export default function DemographicQuestions(){
    return(
        <div className="profile__container__questions">
            <div className="profile__container__questions__block">
                <h2 className="profile__container__questions__block__title">U.S. Standard Demographic Questions</h2>
                <p className="profile__container__questions__block__description">
                    We invite applicants to share their demographic background. 
                    If you choose to complete this survey, your responses may be 
                    used to identify areas of improvement in our hiring process.
                </p>
            </div>
            <button className="profile__container__questions__button">
                Start
                <img 
                    className="profile__container__questions__icon" 
                    src={arrow_right} 
                    alt="arrow_right"
                />
            </button> 
        </div>
    )
} 