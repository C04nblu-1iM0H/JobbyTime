import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobList from "../../components/JobList/JobList"
import { API } from "../../const"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/loader/loader";


export default function AutoApplyScreen(){
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


    useEffect(() => {
        if(isSuccess && data !== undefined){
            setListApplyJob(data);
        }
    }, [isSuccess, data]);

    if (isLoading) {
        return <Loader />;
    }

    return(
        <div className="apply">
            <h1 className="apply__title">AI Auto Apply</h1>
            <JobList list={listApplyJob}/>
        </div>
    )
}