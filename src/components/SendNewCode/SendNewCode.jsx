import { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { API } from "../../const";

export default function SendNewCode(){
const [timeRemaining, setTimeRemaining] = useState(2 * 42); 
const [timerActive, setTimerActive] = useState(true);
useEffect(() => {
    if (!timerActive) return;

    const countDown = setInterval(() => {
        setTimeRemaining((prevTime) => {
            if (prevTime <= 1) {
                clearInterval(countDown);
                setTimerActive(false);
                return 0;
            }
            return prevTime - 1;
        });
    }, 1000);

        return () => clearInterval(countDown); 
    }, [timerActive]);

    const addUser = useMutation({
        mutationFn: async () =>  await axios.post(API.REPEAT_SEND_VERIFY_CODE, {},{ withCredentials: true }),
        onError: (error) => {
            console.error('Error verifycation code user:', error);
        },
        onSettled:() => {
            setTimerActive(true);
        }
    });

    const handleSendingData = (e) =>{
        e.preventDefault();
        addUser.mutate();
    }

    const formatTime = () => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
      };
    return(
        <form onSubmit={handleSendingData} className="footer">
            {timerActive ? (
                <p className="footer__link-disabled">Send a new code</p>
            ) : (
                <button type="sumbit" className="footer__link">
                    Send a new code
                </button>
            )}
            <p className="footer__time">{timerActive ? formatTime() : ""}</p>
        </form>
    )
}