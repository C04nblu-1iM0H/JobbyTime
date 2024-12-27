import { useDispatch } from "react-redux";
import { setSteps } from "../../store/stepSlice";
import arrowRight from "../../assets/onboard/arrow.svg";
import StepStatus from "../StepStatus/StepStatus";

export default function ModalDone(){
    const dispatch = useDispatch();
    return(
        <section className="modal">
            <div className="modal__container">
                <StepStatus width={"150px"} />
                <h1 className="modal__container__title done">Done!</h1>
                <p className="modal__container__text-done">We send applications with a 24h delay.  You have time to check them 
                in the queue where you can view, edit or delete them.</p>
                <section className="modal__footer">
                    <button 
                        onClick={()=>dispatch(setSteps({ step: 'step4', value: false }))} 
                        className="modal__footer__button"
                    >
                        Close
                    </button>
                    <button 
                        className="modal__footer__button"
                    >
                        Applications queue
                        <img className="modal__footer__button__icon" src={arrowRight} alt="icon_image"/>
                    </button>
                </section>
            </div>
        </section>
    )
}