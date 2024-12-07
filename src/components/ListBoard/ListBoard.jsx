import { Link } from 'react-router-dom';
import favorite from '../../assets/board/favorite.svg'
import {API} from '../../const.js';
import { useEffect, useState } from 'react';
import { useQuery} from "@tanstack/react-query";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { formatDateDifference } from '../../utils/date.js';
import Loader from '../loader/loader.jsx';
import Badge from '../badge/badge';

export default function ListBoard({filters}){
    const [listJob, setListJob] = useState([]);
    const token = useSelector(state => state.token.token);    
    console.log(listJob);
    
    const {data, isSuccess, isLoading} = useQuery({
        queryKey:['getJobBoard'],
        queryFn: async () => {
            const response = await axios.post(API.GET_BOARD,{},{
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            })
            console.log(response.data);
            return response.data
        },
    });


    useEffect(() => {
        if(isSuccess && data !== undefined){
            setListJob(data);
        }
    }, [isSuccess, data]);

    const filteredJobs = listJob.filter((job) => {
        if (!filters || Object.keys(filters).length === 0) {
            return true;
        }
        
        const keywordsMatch = filters.keywords
            ? job.text_posting
                  .toLowerCase()
                  .includes(filters.keywords.toLowerCase())
            : true;

        const cityMatch = filters.city
            ? job.location.toLowerCase().includes(filters.city.toLowerCase())
            : true;

        const checkboxesMatch = Object.keys(filters)
            .filter((key) => filters[key] === true)
            .every((key) => job.categories.includes(key));

        return keywordsMatch && cityMatch && checkboxesMatch;
    });

    if(isLoading) return (
        <Loader />
    )
    // if (isError) console.error(`Error: ${error.message}`);
    
    return(
        filteredJobs.map((posting, index) => {
            const categories = typeof posting.categories === 'string' 
            ? JSON.parse(posting.categories) 
            : posting.categories;
            const {commitment, location, team} = categories
            const creationTime = formatDateDifference(posting.updatedat)
            return(
                <Link to={posting.id_posting} key={index}>
                    <section className="board__list">
                        <div className="board__list__company">
                            <p className="board__list__company__name">{team}</p>
                            <img className="board__list__company__favorites" src={favorite} alt="icon_favorites" />
                        </div>
                        <p className="board__list__title">{posting.text_posting}</p>
                        <div className="board__list__information">
                            <div className='board__list__information__box'>
                                <Badge  name={commitment}/>
                            </div>
                            <div className='board__list__information__block'>
                                <Badge  name={location} city="city"/>
                                <Badge  name={creationTime} time="time"/>
                            </div>
                        </div>
                    </section>
                </Link>
            );
        })
    );
}