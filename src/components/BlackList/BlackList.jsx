import { useState } from "react";
import lamp from "../../assets/profile/lamp.svg";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";
import arrow_right from "../../assets/profile/arrow_right.svg";
import BageBlackListCompany from "../BageBlackListCompany/BageBlackListCompany";

const blackList =  [
    {id:1, name: "Google"},
    {id:2, name: "Meta"},
    {id:3, name: "LinkedIn"},
    {id:4, name: "Microsoft"},
]

export default function BlackList(){
    const [selectedCompanyName, setSelecetedCompanyName] = useState("");
    const [blacklistedСompanies, setblacklistedCompanies] = useState(blackList);

    const handleCpmpanyName = (e) => setSelecetedCompanyName(e.target.value);

    const removeCompanyFromTheBlacklist = (id) => {
        console.log(id);
    }
    
    const handleSendCompanyName = () =>{
        console.log(selectedCompanyName);
    }
    return(
        <section
            style={blacklistedСompanies.length > 0 
                ?{width:"1010px"} : null
            } 
            className="profile__blacklist-box">
            <section 
                className="profile__black-list">
                <h3 className="profile__black-list__title">Excluded Companies</h3>
                <div className="profile__black-list__container">
                    <img src={lamp} icon="lamp_icon" />
                    <p className="profile__black-list__container__description">Specify only those companies for which you want to avoid automatic applications. 
                        We will tailor job suggestions and exclude listings 
                        from these specific employers only if the company names match exactly.</p>
                </div>
                <form
                    className="profile__black-list__form"
                    onSubmit={handleSendCompanyName}
                >
                    <input 
                        type="text"
                        name="company"
                        className="profile__black-list__form__input"
                        placeholder="Сompany name you wish to exclude from your job search"
                        onChange={handleCpmpanyName}
                        value={selectedCompanyName}
                    />
                    <ButtonComponent 
                        type="sumbit"
                        classNameButton="profile__black-list__form__button"
                        classNameText="profile__black-list__form__button__text"
                        textButton="Exclude"
                        src={arrow_right}
                        alt="arrow_icon"
                    />
                </form>
            </section>
            <div className="profile__black-list__divider"></div>
            {blacklistedСompanies.length > 0 &&(
                    
                <section className="profile__black-list__company">
                    <h3 className="profile__black-list__company__title">You have excluded companies:</h3>
                    <div className="profile__black-list__company__badge-list">
                        {blacklistedСompanies.map(company =>(
                            <BageBlackListCompany 
                                key={company.id}
                                id={company.id}
                                name={company.name}
                                handleDel={removeCompanyFromTheBlacklist}
                            />
                        ))}
                    </div>
                </section>
            )}
        </section>
    )
}