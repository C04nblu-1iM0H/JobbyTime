import arrow_bottom from '../../../assets/profile/arrow_bottom.svg';

export default function SelectComponent({
    label,
    value,
    onChange,
}){
    return(
        <div className="modal__form__basic__group">
            <label className="modal__form__basic__group__label">{label}</label>
            <div className="modal__form__basic__group__block">
                <select 
                    name="city" 
                    id="city-select"
                    className="modal__form__basic__group__block__select"
                    value={value}
                    onChange={onChange}
                >
                    <option value="United States">United States</option>
                </select>
                <img src={arrow_bottom} alt="arrow_icon" className="arrow_bottom" />
            </div>
        </div>
    )
}