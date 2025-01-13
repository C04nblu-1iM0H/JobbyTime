import message from "../../assets/profile/message.svg";
import phone from "../../assets/profile/phone.svg";
import mark from "../../assets/profile/mark.svg";
import birthdayUser from "../../assets/profile/birthday.svg";
import { useSelector } from "react-redux";
import { formatPhoneNumber } from "../../utils/service";

export default function UserData(){
    const userData = useSelector(state => state.user.userData);
    const {email, countryCode, phoneNumber, city, birthday} = userData;

    const phoneFormat = formatPhoneNumber(phoneNumber);
    const fullphone = phoneFormat.length > 0  ? `+${countryCode} ${phoneFormat}` : "unknown";
    const date = birthday ? new Date(birthday).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    }) : "unknown"
    
    
    return(
        <div className="profile__container__information__data">
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={message}
                    alt="message_icon"
                />
                {email || "unknown"}
            </p>
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={phone}
                    alt="phone_icon"
                />
                { fullphone}
            </p>
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={mark}
                    alt="mark_icon"
                />
                {city || "unknown"}
            </p>
            <p className="profile__container__information__data__description">
                <img 
                    className="profile__container__information__data__icon"
                    src={birthdayUser}
                    alt="birthday_icon"
                />
                {date}
            </p>
        </div>
    )
}