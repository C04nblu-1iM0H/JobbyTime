
export default function FormFieldProfile({ label, type = "text", value, onChange }){
    return (
        <div className="profile__container__information__findings__form__basic__group">
            <label className="profile__container__information__findings__form__basic__group__label">{label}</label>
            <input
                className="profile__container__information__findings__form__basic__group__input"
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
      );
} 