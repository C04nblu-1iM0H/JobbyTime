import { useDispatch, useSelector } from 'react-redux';
import fire from '../../assets/onboard/fire.svg';
import queue from '../../assets/onboard/queue.svg';
import gotosend from '../../assets/onboard/gotosend.svg';
import { setSteps } from '../../store/stepSlice';

export default function StepsButton({handleStart}){
    const dispatch = useDispatch();
    const done = useSelector( state => state.step.done);
    const steps = useSelector( state => state.step.steps);
    const {stepDone1, stepDone2, stepDone3} = done;
    const {step1} = steps;

    const handleStartSteps = () =>{
        if (stepDone1 && !stepDone2) {
            dispatch(setSteps({ step: 'step2', value: true }));
        }else if(stepDone1 && stepDone2 && !stepDone3){
            dispatch(setSteps({ step: 'step3', value: true }));
        }else if(stepDone1 && stepDone2){
            dispatch(setSteps({ step: 'step3', value: true }));
        }else if(!step1){
            handleStart(true);
        }
    }
    return(
        <>
            { stepDone3 ?(
                <div className="onboard__step__block">
                    <button 
                        className="onboard__step__block__button onboard__step__block__sent-btn"
                    >
                        <p className="onboard__step__block__button__sent-text">Go to sent applications</p>
                        <img src={gotosend} alt="gotosend_icon" />
                    </button>
                </div>
            ):(
                <button 
                    className="onboard__step__button"
                    onClick={ ()=> handleStartSteps()}
                >
                    <p className="onboard__step__button__text">{stepDone1?"Continue" : "Let's start" }</p>
                    <img src={fire} alt="fire_icon" />
                </button>
            )}
        </>
       
    )
}