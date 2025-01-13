import { useDispatch, useSelector } from "react-redux";
import {setDoneStep, setStateOnboard, setSteps } from "../../store/stepSlice";
import JobOpeningsList from "../JobOpeningsList/JobOpeningsList";
import StepStatus from "../StepStatus/StepStatus";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../const";
import axios from "axios";
import Loader from "../loader/loader";

export default function JobOpenings(){
    const dispatch = useDispatch();
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [selectedJobs, setSelectedJobs] = useState([]);
    const [listApplyJob, setListApplyJob] = useState([]);
    const token = useSelector(state => state.token.token);    
    
    const {data, isSuccess, isError, isLoading} = useQuery({
        queryKey:['getAutoApply'],
        queryFn: async () => {
            const response = await axios.post(API.GET_APPLY_POSTING,{},{
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
            console.log(response);
            dispatch(setStateOnboard(response.state_onbording));
        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
    })

    const SendJobs = useMutation({
        mutationFn: async (data) => {
            console.log(data);
            const response = await axios.post(API.CHOISE_POSTING, data, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });          
            return response.data  
        },
        onSuccess: (response) => {
            if(response === true){
                dispatch(setDoneStep({ step: 'stepDone2', value: true }))
                dispatch(setSteps({ step: 'step2', value: false }));
                dispatch(setSteps({step:'step3', value:true}));

                updateState.mutate({ update_step: "step3" });
            }


        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
        onSettled: () => {
            setIsLoadingData(false);
        }
    })


    useEffect(() => {
        if(isSuccess && data !== undefined){
            setListApplyJob(data);
        }
    }, [isSuccess, data]);

    if (isLoading) {
        return <Loader />;
    }

    const handleNextStep = () =>{

        setIsLoadingData(true);
        const reauesteData = {id_posts:selectedJobs};
        SendJobs.mutate(reauesteData);
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
                <JobOpeningsList 
                    jobs={listApplyJob}
                    selectedJobs={selectedJobs}
                    setSelectedJobs={setSelectedJobs}
                />
                <section className="modal__footer">
                    <ButtonComponent 
                        type="button"
                        ClickFunction={ () => dispatch(setSteps({ step: 'step2', value: false }))}
                        classNameButton={"modal__footer__button-close"}
                        textButton={"Close"}
                    />
                    <button
                        type="button"
                        onClick={handleNextStep}
                        className={"modal__form__block__button"}
                    >
                        Tailor Resume and Cover Letter 
                        {isLoadingData && (
                            <span className="spinner"></span> 
                        )}
                    </button>
                </section>
            </div>
        </section>
    )
}