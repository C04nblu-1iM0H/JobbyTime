import { useDispatch } from "react-redux";
import ListTariffPlan from "../TariffPlan/ListTarifPlan";
import { setFreePlan, setIsVerificationOfPayment, setSteps } from "../../store/stepSlice";

export default function TariffPlanModal(){
    const dispatch = useDispatch();

    const handleContinueForFree = () =>{
        dispatch(setIsVerificationOfPayment(false));
        dispatch(setSteps({ step: 'step2', value: true }));
        dispatch(setFreePlan(true));
    }
    return(
        <section className="modal">
            <div className="modal__container modal__container__tariff-plan">
                <h2 className="modal__container__title">Choose a plan for a productive and fast job search</h2>
                <p className="modal__container__description tariff-plan__description">We’ve committed to your career success. If you don't land an interview within 2 months, you will get your money back.</p>
                <ListTariffPlan />
                <section className="modal__footer">
                    <button 
                        onClick={()=> dispatch(setIsVerificationOfPayment(false))}
                        className="modal__footer__button"
                    >
                        Close
                    </button>
                    <button 
                        onClick={()=> handleContinueForFree()}
                        className="modal__footer__button"
                    >
                        Continue for free
                    </button>
                </section>
            </div>
        </section>
    )
}