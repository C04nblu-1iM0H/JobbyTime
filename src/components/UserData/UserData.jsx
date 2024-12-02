import message from "../../assets/profile/message.svg";
import phone from "../../assets/profile/phone.svg";
import mark from "../../assets/profile/mark.svg";
import birthday from "../../assets/profile/birthday.svg";

export default function UserData(){
    return(
        <div className="profile__container__information__data">
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={message}
                    alt="message_icon"
                />
                johndoe2024@email.com
            </p>
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={phone}
                    alt="phone_icon"
                />
                unknown
            </p>
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={mark}
                    alt="mark_icon"
                />
                unknown
            </p>
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={birthday}
                    alt="birthday_icon"
                />
                unknown
            </p>
        </div>
    )
}