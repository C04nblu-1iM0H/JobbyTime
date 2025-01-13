import { useSelector } from 'react-redux'
import './step_status.scss'

export default function StepStatus({width}){
    const done = useSelector(state => state.step.done);
    const {stepDone1, stepDone2, stepDone3} = done;
    const state = useSelector(state => state.step.state_onbording);
    return(
        <div className="step-status">
            <div className="step-status__item">
                <p className={`step-status__item__title 
                    ${ stepDone1 === true ? "success": state === "step1" ? "current" : ""}`}
                >Step 1</p>
                <p className={`step-status__item__description 
                    ${stepDone1 === true ? "success": state === "step1" ? "current" : ""}`}
                >Resume in .pdf</p>
            </div>
            <div 
                className={`step-status__divider 
                    ${stepDone1 === true
                        ? "success-divider"
                        : state === "step1"
                            ? "current-divider"
                            : ""
                    }`}
                style={{ width }}
            ></div>
            <div className="step-status__item">
                <p className={`step-status__item__title 
                    ${stepDone2 === true ? "success": state === "step2" ? "current" : ""}`}
                >Step 2</p>
                <p className={`step-status__item__description 
                    ${stepDone2 === true ? "success": state === "step2" ? "current" : ""}`}
                >Tailor Resume and Cover Letter </p>
            </div>
            <div 
                className={`step-status__divider 
                    ${stepDone2 === true
                        ? "success-divider"
                        : state === "step2"
                            ? "current-divider"
                            : ""
                    }`}
                style={{ width }}
            ></div>
            <div className="step-status__item">
                <p className={`step-status__item__title 
                    ${stepDone3 === true ? "success": state === "step3" ? "current" : ""}`}
                >Step 3</p>
                <p className={`step-status__item__description 
                    ${stepDone3 === true ? "success": state === "step3" ? "current" : ""}`}
                >AI Auto Apply</p>
            </div>
        </div>
    )
}