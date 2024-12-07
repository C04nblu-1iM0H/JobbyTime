import UserInformation from "../../components/UserInformation/UserInformation";
import arrow_right from "../../assets/Signup/icon_button.svg";
import "./profile.scss";

export default function ProfileScreen(){
    return(
        <section className="profile">
            <h1 className="profile__title">My Profile</h1>
            <div className="profile__container">
                <UserInformation />
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
            </div>
            {/* <h2 className="profile__subtitle">Location</h2>
            <div className="profile__location">
                
            </div> */}
        </section>
    )
}