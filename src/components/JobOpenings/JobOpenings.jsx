import { useDispatch } from "react-redux";
import { setCurrentStep, setDoneStep, setIsVerificationOfPayment, setSteps } from "../../store/stepSlice";
import JobOpeningsList from "../JobOpeningsList/JobOpeningsList";
import StepStatus from "../StepStatus/StepStatus";

export default function JobOpenings(){
    const dispatch = useDispatch();

    const handleIsVerificationOfPayment = () =>{
        // dispatch(setIsVerificationOfPayment(true));
        dispatch(setDoneStep({ step: 'stepDone2', value: true }))
        dispatch(setCurrentStep({ step: 'currentStep3', value: true }));
        dispatch(setSteps({ step: 'step2', value: false }));
        dispatch(setSteps({step:'step3', value:true}));
    }
    return(
        <section className="modal">
            <div className="modal__container">
                <StepStatus width={"150px"} />
                <h1 className="modal__container__title">We have selected several vacancies specifically for you</h1>
                <p className="modal__container__description">
                    Select All vacancies, several or one, click “Tailor Resume and Cover Letter”. 
                    We will tailor your resume, build a cover letter for each vacancy and after your 
                    confirmation send an application to the employer on your behalf.
                </p>
                <JobOpeningsList />
                <section className="modal__footer">
                    <button 
                        onClick={()=>dispatch(setSteps({ step: 'step2', value: false }))} 
                        className="modal__footer__button"
                    >
                        Close
                    </button>
                    <button 
                        onClick={() => handleIsVerificationOfPayment()}
                        className="modal__footer__button"
                    >
                        Tailor Resume and Cover Letter
                    </button>
                </section>
            </div>
        </section>
    )
}