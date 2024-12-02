import { useEffect, useState,  } from "react"

export default function Counter({handleCounter, currentCount}){
    const [count, setCount] = useState(5); // Используем useState для состояния

    const increment = () => {
        setCount(prevCount => prevCount + 1); // Обновляем значение через setState
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0)); // Ограничиваем значение на 0
    };

    const updateInputValue = () => {
        handleCounter(count); // Передаем новое значение в родительский компонент
    };

    // Обновляем значение при каждом изменении
    useEffect(() => {
        updateInputValue();
    }, [count]);
    
    return(
        <div className="modal__form__container__group__counter">
            <button 
                type="button"
                className="modal__form__container__group__counter__button" 
                onClick={decrement}
            >
                -
            </button>
            <input  
                className="modal__form__container__group__counter__input" 
                type="text" 
                value={currentCount? currentCount : count} 
                readOnly 
            />
            <button 
                type="button"
                className="modal__form__container__group__counter__button" 
                onClick={increment}
            >
                +
            </button>
        </div>
    )
}