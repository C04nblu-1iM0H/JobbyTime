import { useSelector } from 'react-redux'
import './step_status.scss'

export default function StepStatus({width}){
    const current = useSelector(state => state.step.current);
    const done = useSelector(state => state.step.done);
    const {currentStep1, currentStep2, currentStep3} = current;
    const {stepDone1, stepDone2, stepDone3} = done;
    return(
        <div className="step-status">
            <div className="step-status__item">
                <p className={`step-status__item__title 
                    ${ stepDone1 === true ? "success": currentStep1 === true ? "current" : ""}`}
                >Step 1</p>
                <p className={`step-status__item__description 
                    ${stepDone1 === true ? "success": currentStep1 === true ? "current" : ""}`}
                >Resume in .pdf</p>
            </div>
            <div 
                className={`step-status__divider 
                    ${stepDone1 === true
                        ? "success-divider"
                        : currentStep1 === true 
                            ? "current-divider"
                            : ""
                    }`}
                style={{ width }}
            ></div>
            <div className="step-status__item">
                <p className={`step-status__item__title 
                    ${stepDone2 === true ? "success": currentStep2 === true ? "current" : ""}`}
                >Step 2</p>
                <p className={`step-status__item__description 
                    ${stepDone2 === true ? "success": currentStep2 === true ? "current" : ""}`}
                >Tailor Resume and Cover Letter </p>
            </div>
            <div 
                className={`step-status__divider 
                    ${stepDone2 === true
                        ? "success-divider"
                        : currentStep2 === true 
                            ? "current-divider"
                            : ""
                    }`}
                style={{ width }}
            ></div>
            <div className="step-status__item">
                <p className={`step-status__item__title 
                    ${stepDone3 === true ? "success": currentStep3 === true ? "current" : ""}`}
                >Step 3</p>
                <p className={`step-status__item__description 
                    ${stepDone3 === true ? "success": currentStep3 === true ? "current" : ""}`}
                >AI Auto Apply</p>
            </div>
        </div>
    )
}