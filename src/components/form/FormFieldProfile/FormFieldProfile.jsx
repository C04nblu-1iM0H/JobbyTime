
export default function FormFieldProfile({ 
    label, 
    name,
    type = "text", 
    value, 
    onChange, 
    placeholder,
    errors,
}){
    return (
        <div className="modal__form__basic__group">
            <label className="modal__form__basic__group__label">{label}</label> 
            <input
                name={name}
                className={`modal__form__basic__group__input ${
                    errors ? "modal__form__basic__group__input__error" : ""
                }`}  
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete="off"
            />
            {errors && (
                <span className="modal__form__basic__group__error-message">{errors}</span>
            )}
        </div>
      );
} 