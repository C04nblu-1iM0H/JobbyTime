import { useEffect, useState } from "react";
import JobList from "../../components/JobList/JobList"
import { API } from "../../const"
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/loader/loader";

export default function AppliedResultsScreen(){
    const [listApplyResult, setListApplyResult] = useState([]);
    const token = useSelector(state => state.token.token);    
    
    const {data, isSuccess, isLoading} = useQuery({
        queryKey:['getApplyResults'],
        queryFn: async () => {
            const response = await axios.post(API.GET_APPLY_RESULTS,{},{
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
            setListApplyResult(data);
        }
    }, [isSuccess, data]);

    if (isLoading) {
        return <Loader />;
    }
    return(
        <div className="apply">
            <h1 className="apply__title">AI Applied Results</h1>
            <JobList list={listApplyResult}/>
        </div>
    )
}