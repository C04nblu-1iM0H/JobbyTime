import icon from '../../assets/Signup/icon_button.svg'


export default function EmailComponent({
    handleEmail,
    handleToSendEmail,
    errors,
    value,
}){
    return(
        <section className="forgotMyPassword">
                <h1 className="forgotMyPassword__title">Email</h1>
                <form className='forgotMyPassword__form' onSubmit={handleEmail}>
                    <div className="forgotMyPassword__form__group">
                        <label className="forgotMyPassword__form__group__label">Specify your email address</label>
                        <input 
                            className={`forgotMyPassword__form__group__input ${
                                errors ? "forgotMyPassword__form__group__input__error" : ""
                            }`} 
                            type="email" 
                            placeholder="Enter your Email"
                            onChange={handleToSendEmail}
                            value={value}
                        />
                        {errors && (
                            <span className="forgotMyPassword__form__group__error-message">{errors}</span>
                        )}
                    </div>
                    <button className="forgotMyPassword__form__button" type="submit">
                        <span className="forgotMyPassword__form__button__description">NEXT STEP</span>
                        <img className="forgotMyPassword__form__button__icon" src={icon} alt="icon"/>
                    </button>
                </form>
            </section>
    )
}