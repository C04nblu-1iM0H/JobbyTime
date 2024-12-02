import { useMutation } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../const";

export default function VerifyForm(){
    const [code, setCode] = useState(new Array(6).fill("")); // Для хранения 6 символов
    const inputs = useRef([]); // Ссылки на input элементы
    const navigate = useNavigate();

    const handleChange = (value, index) => {
        // Обновляем значение текущего поля
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    
        // Переход к следующему полю
        if (value && index < 5) {
          inputs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
          inputs.current[index - 1].focus();
        }
    };

    const varifyEmail = useMutation({
        mutationFn: async ({ code }) => {
            const currentCode = code.join("");
            
            await fetch(API.REGISTRETION, {
                method: 'POST',
                credentials: 'include',
                headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
                body: JSON.stringify({ verification_code: currentCode }),
            });
        },
        onSuccess: () => {
            navigate("/login");
        },
        onError: (error) => {
            console.error('Error adding user:', error);
        },
    });


    const handleSumbit = (e) =>{
        e.preventDefault();
        varifyEmail.mutate({code});        
    }
    return(
        <form onSubmit={handleSumbit} className="verify__form">
            <div className="verify__form__inputs">
                {code.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputs.current[index] = el)} 
                    className="verify__form__inputs__input"
                    placeholder="•" 
                />
                ))}
            </div>
            <button type="submit" className="verify__form__button">
                SIGN UP
            </button>
        </form>
    )
}