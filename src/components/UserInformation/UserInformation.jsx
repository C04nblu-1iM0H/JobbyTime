import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import edit from "../../assets/profile/edit.svg";
import UserData from "../UserData/UserData";
import UserInfoForm from "../form/UserInfoForm/UserInfoForm";

export default function UserInformation(){
    const [activeForm, SetActiveForm] = useState(false);

    useEffect(() => {
        if (activeForm) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [activeForm])


    return(
        <section className="profile__container__information">
            <div className="profile__container__information__block">
                <h2 className="profile__container__information__block__title">Your profile <br/> information</h2>
                <button 
                    className="profile__container__information__block__button"
                    onClick={() => SetActiveForm(true)}
                >
                    <img className="profile__container__information__block__icon" src={edit} alt="edit_icon" />
                    Edit
                </button>
            </div>
            <UserData />
            {activeForm && ReactDOM.createPortal(
                <div className="modal">
                    <UserInfoForm SetActiveForm={SetActiveForm}/>
                </div>,
                document.body
            )}
        </section>
    )
}