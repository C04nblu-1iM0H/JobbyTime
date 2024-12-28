
export default function QuestionsComponent({
    title,
    name,
    selected, 
    handleOptionChange, 
    radioButtons,
    column ="",
    widthButtonsBlock="",
    widthContainer="",
}){
    return(
        <section 
        className={`questions__container ${widthContainer}`}
        >
            <h3 className="questions__container__title">{title}</h3>
            <div className={`questions__container__block ${column}`}>
                {radioButtons.map(button => (
                    <div
                        className={`questions__container__block__buttons buttons ${widthButtonsBlock}`}
                        key={button.id}>
                        <input 
                            className="questions__container__block__buttons__input"
                            type="radio"
                            name={name}
                            value={button.value}
                            checked={selected === button.value}
                            onChange={() => handleOptionChange(button.value)}
                        />
                        <label className="questions__container__block__buttons__label">{button.label}</label>
                    </div>
                ))}
            </div>
        </section>
    )
}