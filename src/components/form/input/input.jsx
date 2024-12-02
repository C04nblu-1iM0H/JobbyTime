
export default function Input({handleName, Name}){
    return(
        <div className="modal__form__container__group">
            <label className="modal__form__container__group__label">123</label>
            <input 
                className="modal__form__container__group__input" 
                type="text"
                placeholder=""
                onChange={handleName}
                value={Name}
            />
        </div>

    );
}