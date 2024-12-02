import download from '../../assets/resume/file.svg';
import DownloadArea from '../../components/DownloadArea/DownloadArea';
import './resume.scss'
import ListResumeBuilder from '../../components/ListResumeBuilder/ListResumeBuilder';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API } from '../../const';
import { useEffect, useState } from 'react';
import Loader from '../../components/loader/loader';

export default function ResumeScreen(){
    const [listResume, setListResume] = useState([]);
    const token = useSelector(state => state.token.token);
    
    const {data, isSuccess, isLoading} = useQuery({
        queryKey:['getResume'],
        queryFn: async () => {
            const response = await axios.post(API.RESUME_BUILDER,{},{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })            
            return response.data;
        },
    });

    useEffect(()=>{ 
        if(isSuccess){
            setListResume(data);
        }

    },[data, isSuccess])

    if (isLoading) {
        return <Loader />;
    }
    
    
    return(
        <section className="resume">
            <h1 className="resume__title">AI Resume Builder</h1>
            {
                listResume.length !==0 ? <ListResumeBuilder listResume={listResume} />:<DownloadArea icon={download}/>
            }
            
        </section>
    )
}