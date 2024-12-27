

export default function RadioButtonComponent({name, text, handleOptionChange, selectedOption}){
    return(
        <>
            <h3 className="profile__location__block__title">{text}</h3>
            <div className="profile__location__block__radio-buttons">
                <label className="profile__location__block__radio-buttons__label">
                    <input
                        className="profile__location__block__radio-buttons__input"
                        type="radio"
                        name="location"
                        value="Yes"
                        checked={selectedOption === 'Yes'}
                        onChange={() => handleOptionChange('Yes')}
                    />
                        Yes
                </label>
                <label className="profile__location__block__radio-buttons__label">
                    <input
                        className="profile__location__block__radio-buttons__input"
                        type="radio"
                        name={name}
                        value="No"
                        checked={selectedOption === 'No'}
                        onChange={() => handleOptionChange('No')}
                    />
                        No
                </label>
            </div>
        </>
    )
}