import { useDispatch } from "react-redux";
import JobList from "../JobList/JobList";
import { jobs } from "../../const";
import { setDoneStep, setSteps } from "../../store/stepSlice";
import StepStatus from "../StepStatus/StepStatus";

export default function ModalAiAutoApply(){
    const dispatch = useDispatch();

    const handleNextStep = () => {
        dispatch(setDoneStep({ step: 'stepDone3', value: true }))
        dispatch(setSteps({step:'step3', value:false}));
        dispatch(setSteps({step:'step4', value:true}));
    }

    return(
        <section className="modal">
            <div className="modal__container">
                <StepStatus width={"150px"} />
                <h1 className="modal__container__title">We are ready to start AI Auto Apply</h1>
                <JobList list={jobs}/>
                <section className="modal__footer">
                    <button 
                        onClick={()=>dispatch(setSteps({ step: 'step3', value: false }))} 
                        className="modal__footer__button"
                    >
                        Close
                    </button>
                    <button 
                        onClick={() => handleNextStep()}
                        className="modal__footer__button"
                    >
                        Start AI Auto Apply
                    </button>
                </section>
            </div>
        </section>
    )
}