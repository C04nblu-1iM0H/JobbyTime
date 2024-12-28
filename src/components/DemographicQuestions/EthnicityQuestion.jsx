

export default function EthnicityQuestion({
    title,
    name,
    selected,
    handleOptionChange,
    checkboxButtons,
    column = "",
    widthButtonsBlock ="",
    widthContainer="",
}){
    return(
        <section 
            className={`questions__container ${widthContainer}`}
        > 
            <h3 className="questions__container__title">{title}</h3>
            <div className={`questions__container__block ${column}`}>
                {checkboxButtons.map(checkbox => (
                    <div
                        className={`questions__container__block__buttons buttons ${widthButtonsBlock}`}
                        key={checkbox.id}>
                        <input 
                            className="questions__container__block__buttons__checkbox"
                            type="checkbox"
                            name={name}
                            value={checkbox.value}
                            checked={selected.includes(checkbox.value)}
                            onChange={(e) =>
                                handleOptionChange(checkbox.value, e.target.checked)
                            }
                        />
                        <label className="questions__container__block__buttons__label">{checkbox.label}</label>
                    </div>
                ))}
            </div>
        </section>
    )
}