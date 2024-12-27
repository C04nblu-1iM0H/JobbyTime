import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ResumeDataGeneration from '../../components/form/ResumeDataGeneration/ResumeDataGeneration';
import InformationBoard from '../../components/InformationBoard/InformationBoard';
import ResumeModal from '../../components/resumeModal/ResumeModal';
import Step from '../../components/step/step';
import Loader from '../../components/loader/loader';
import { useSelector } from 'react-redux';
import JobOpenings from '../../components/JobOpenings/JobOpenings';
import TariffPlan from '../../components/TariffPlan/TariffPlan';
import TariffPlanModal from '../../components/TariffPlanModal/TariffPlanModal';
import ModalAiAutoApply from '../../components/ModalAiAutoApply/ModalAiAutoApply';
import './onboard.scss';
import '../auto-apply-screen/apply.scss';
import ModalDone from '../../components/ModalDone/ModalDone';
import { disabledScrollSteps } from '../../utils/service';

function MainScreen(){
    const [start, setStart] = useState(false);
    const [fileName, setFileName] = useState("");
    const [file, setFile]=useState("");
    const isLoading = useSelector( state => state.step.loading);
    const steps = useSelector( state => state.step.steps);
    const isVerificationOfPayment = useSelector( state => state.step.isVerificationOfPayment);
    const {step1, step2, step3, step4} = steps;

    useEffect(() => {
        disabledScrollSteps(start, step1, step2, step3, step4, isVerificationOfPayment);
    }, [start, step1, step2, step3, isVerificationOfPayment]);

    return(
        <section className="onboard">
            <InformationBoard />
            <Step handleStart={setStart}/>
            <TariffPlan />
            {start === true && ReactDOM.createPortal(
                <ResumeModal 
                    start={start} 
                    handleStart={setStart}
                    setFileName={setFileName}
                    setFile={setFile}
                />,            
                document.body
            )}
            {isLoading && (<Loader />)}
            {step1 && fileName.length !== 0 && ReactDOM.createPortal(
                <ResumeDataGeneration file={file} OldFileName={fileName}/>,
                document.body
            )}
            {step2 && ReactDOM.createPortal(
                <JobOpenings />,
                document.body
            )}
            {isVerificationOfPayment && ReactDOM.createPortal(
                <TariffPlanModal />,
                document.body
            )}
            {step3 && ReactDOM.createPortal(
                <ModalAiAutoApply />,
                document.body
            )}
            {step4 && ReactDOM.createPortal(
                <ModalDone />,
                document.body
            )}
        </section>
    );
}

export default MainScreen;