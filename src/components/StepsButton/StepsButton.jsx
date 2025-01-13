import { useDispatch, useSelector } from 'react-redux';
import fire from '../../assets/onboard/fire.svg';
import queue from '../../assets/onboard/queue.svg';
import gotosend from '../../assets/onboard/gotosend.svg';
import { setStateOnboard, setSteps } from '../../store/stepSlice';
import { API } from '../../const';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Loader from '../loader/loader';

export default function StepsButton({handleStart}){
    const dispatch = useDispatch();
    const [enabled, setEnabled] = useState(false);
    const token = useSelector((state) => state.token.token);
    const state = useSelector(state => state.step.state_onbording);
    const done = useSelector( state => state.step.done);
    const {stepDone1, stepDone2, stepDone3} = done;

    const {data, isSuccess, isLoading, refetch } = useQuery({
        queryKey:['getSteps'],
        queryFn: async () => {
            const response = await axios.post(API.GET_STEPS,{},{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })          
            return response.data;
        },
        refetchOnWindowFocus: false,
        enabled,
    });

    useEffect(()=>{
        if (isSuccess && data) {
           dispatch(setStateOnboard(data.state_onbording));
        }
    },[isSuccess, data, dispatch])

    const handleStartSteps = () =>{
        setEnabled(true);
        refetch();
        if(!stepDone1 && state === "step1"){
            handleStart(true);
        }else if(stepDone1 && state === "step2"){
            dispatch(setSteps({ step: 'step2', value: true }));
        }else if(stepDone2 && state === "step3"){
            dispatch(setSteps({ step: 'step3', value: true }));
        }else if(stepDone3){
            dispatch(setSteps({ step: 'step4', value: true }));
        }
    }

    if(isLoading){
        return <Loader /> 
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
                    <p className="onboard__step__button__text">{stepDone1 ? "Continue" : "Let's start" }</p>
                    <img src={fire} alt="fire_icon" />
                </button>
            )}
        </>
       
    )
}