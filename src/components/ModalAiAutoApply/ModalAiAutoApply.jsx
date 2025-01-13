import { useDispatch, useSelector } from "react-redux";
import { API } from "../../const";
import { setDoneStep, setStateOnboard, setSteps } from "../../store/stepSlice";
import StepStatus from "../StepStatus/StepStatus";
import JobListModal from "../JobListModal/JobListModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader/loader";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";

export default function ModalAiAutoApply(){
    const dispatch = useDispatch();
    const token = useSelector(state => state.token.token);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [listJob, setListJob] = useState([]);
    const [lessonAIAutoApply, ] = useState(true);
    const [jobId, setJobId] = useState("");

    const {data, isSuccess, isError, isLoading} = useQuery({
        queryKey:['getChoisePosting'],
        queryFn: async () => {
            const response = await axios.post(API.GET_CHOISE_POSTING,{},{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            return response.data
        },
    });

    const updateState = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(API.UPDATE_STEPS, formData, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });          
            return response.data  
        },
        onSuccess: (response) => {
            dispatch(setStateOnboard(response.state_onbording));
        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
    })

    const applyed = useMutation({
        mutationFn: async (id_post) => {
            const response = await axios.post(API.PUT_APPLYED, {id_post}, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });       
            return response.data 
        },
        onSuccess: (response) => {
            if (response === true) {
                updateState.mutate({ update_step: "step3" });
                dispatch(setDoneStep({ step: 'stepDone3', value: true }))
                dispatch(setSteps({ step: 'step3', value: false }));
                dispatch(setSteps({step:'step4', value:true}));
            }
        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
        onSettled: () => {
            setIsLoadingData(false);
        },
    });


    useEffect(() => {
        if(isSuccess && data !== undefined){
            setListJob(data);
        }
    }, [isSuccess, data]);

    if (isLoading) {
        return <Loader />;
    }

    const handleNextStep = () =>{
        setIsLoadingData(true);
        applyed.mutate(jobId)
    }
    
    return(
        <section className="modal">
            <div 
                className="modal__container modal__container-apply"
            >
                <StepStatus width={"170px"} />
                <h1 className="modal__container__title">We are ready to start AI Auto Apply</h1>
                <JobListModal 
                    list={listJob}
                    setJobId={setJobId}
                />
                <section className="modal__footer">
                    <ButtonComponent 
                        type="button"
                        ClickFunction={ () => dispatch(setSteps({ step: 'step3', value: false }))}
                        classNameButton={"modal__footer__button-close"}
                        textButton={"Close"}
                    />
                    <button
                        type="button"
                        onClick={handleNextStep}
                        className={"modal__form__block__button"}
                    >
                        Start AI Auto Apply
                        {isLoadingData && (
                            <span className="spinner"></span> 
                        )}
                    </button>
                </section>
            </div>
        </section>
    )
}