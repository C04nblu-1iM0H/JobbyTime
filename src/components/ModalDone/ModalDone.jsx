import { useDispatch } from "react-redux";
import { setSteps } from "../../store/stepSlice";
import arrowRight from "../../assets/onboard/arrow.svg";
import StepStatus from "../StepStatus/StepStatus";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";

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
                    <ButtonComponent 
                        type="button"
                        ClickFunction={ () => dispatch(setSteps({ step: 'step4', value: false }))}
                        classNameButton={"modal__footer__button-close"}
                        textButton={"Close"}
                    />
                    <ButtonComponent 
                        type="button"
                        ClickFunction={ () => dispatch(setSteps({ step: 'step4', value: false }))}
                        classNameButton={"modal__footer__button-save"}
                        textButton={"Applications queue"}
                        src={arrowRight}
                        classNameIcon="modal__footer__button__icon"
                    />
                </section>
            </div>
        </section>
    )
}