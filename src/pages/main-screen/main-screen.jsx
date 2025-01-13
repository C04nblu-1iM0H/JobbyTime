import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { disabledScrollSteps } from '../../utils/service';
import Step from '../../components/step/step';
import Loader from '../../components/loader/loader';
import JobOpenings from '../../components/JobOpenings/JobOpenings';
import TariffPlan from '../../components/TariffPlan/TariffPlan';
import TariffPlanModal from '../../components/TariffPlanModal/TariffPlanModal';
import ModalAiAutoApply from '../../components/ModalAiAutoApply/ModalAiAutoApply';
import ModalDone from '../../components/ModalDone/ModalDone';
import InformationBoard from '../../components/InformationBoard/InformationBoard';
import ResumeModal from '../../components/resumeModal/ResumeModal';
import ModalCollectingResumeData from '../../components/ModalCollectingResumeData/ModalCollectingResumeData';
import './onboard.scss';
import '../auto-apply-screen/apply.scss';
import axios from 'axios';
import { API } from '../../const';
import { setUserData } from '../../store/userSlice';
import UserFormModal from '../../components/UserFormModal/UserFormModal';

function MainScreen(){
    const token = useSelector(state => state.token.token);
    const [start, setStart] = useState(false);
    const [fileName, setFileName] = useState("");
    const [file, setFile]=useState("");
    const isLoadingStep = useSelector( state => state.step.loading);
    const steps = useSelector( state => state.step.steps);
    // const isVerificationOfPayment = useSelector( state => state.step.isVerificationOfPayment);
    const {step0, step1, step2, step3, step4} = steps;

    const dispatch = useDispatch();

    const {data, isSuccess, isLoading} = useQuery({
        queryKey:['getUserData'],
        queryFn: async () => {
            const response = await axios.post(API.USER_DATA,{},{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })            
            return response.data;
        },
    });

    useEffect(() => {
        if(isSuccess && data !== undefined){
            Object.entries(data).forEach(([key, value]) => {
                dispatch(setUserData({ data: key, value: value || "" }));
            }); 
        } 
        disabledScrollSteps(start, step0, step1, step2, step3, step4,);
    }, [start, step0, step1, step2, step3, step4, isSuccess, data, dispatch]);


    if (isLoading) {
        return <Loader />;
    }
    
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
                    width="615px"
                />,            
                document.body
            )}
            {isLoadingStep && (<Loader />)}
            {step0 && ReactDOM.createPortal(
                <UserFormModal width="615px"/>,
                document.body
            )}
            {step1 && fileName.length !== 0 && ReactDOM.createPortal(
                <ModalCollectingResumeData file={file} OldFileName={fileName}/>,
                document.body
            )}
            {step2 && ReactDOM.createPortal(
                <JobOpenings />,
                document.body
            )}
            {/* {isVerificationOfPayment && ReactDOM.createPortal(
                <TariffPlanModal />,
                document.body
            )} */}
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