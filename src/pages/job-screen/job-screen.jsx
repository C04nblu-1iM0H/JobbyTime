import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../const";
import { formatDateDifference } from "../../utils/date";
import { numberWithCommas } from "../../utils/numberWthisComas";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import Badge from "../../components/badge/badge";
import Loader from "../../components/loader/loader";
import arrow from '../../assets/job/arrow_left.svg'
import link from '../../assets/job/link.svg'

export default function JobScreen(){
    const [job, setJob] = useState([]);
    const token = useSelector( state => state.token.token);
    const params = useParams();
    const jobId = params.id;
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const {data, isSuccess, isLoading} = useQuery({
        queryKey:['jobList'],
        queryFn: async () => {
            const response = await axios.post(API.GET_POSTING,{id_post:jobId},{
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
            setJob(data);
        }
    }, [isSuccess, data, jobId]);
    
    if(isLoading) return (
        <Loader />
    )

    

    const content = job.content ? JSON.parse(job.content) : { lists: [], description: "" };
    const categories = job.categories ? JSON.parse(job.categories) : { commitment: "", location: "", team: "" };
    const salary = job.salaryrange ? JSON.parse(job.salaryrange) : { min: 0, max: 0 };
    
    const creationTime = formatDateDifference(job.createdat || new Date());
    const { commitment = "", location = "", team = "" } = categories;
    const commitmentArray = commitment ? commitment.split(', ').map(item => item.trim()) : [];
    const { lists = [], description = "" } = content; 
    const { min = 0, max = 0 } = salary;      
    const salaryString = `$${numberWithCommas(min)}-$${numberWithCommas(max)} a year`;

    return(
        <section className="job headers" key={job.id}>
            <Breadcrumbs currenturl={job.text_posting} />
            <div className="headers__title">
                <Link 
                    onClick={goBack}
                    className=" headers__title__button"
                >
                    <img src={arrow} alt="arrow_left"/>
                </Link>
                <h1 className="headers__title__text">{job.text_posting}</h1>
            </div>
            <div className="job__list">
                <Badge name={team} team="team" />
                <Badge name={location} city="city"/>
                <Badge name={creationTime} time="time"/>
            </div>
            <section className="job__container">
                <article className="job__container__description">
                    <h2 className="job__container__description__title">Company Description</h2>
                    <p className="job__container__description__text">{description}</p>
                    {   Array.isArray(lists)
                        ? lists.map((item, index) =>{
                                const {text, content} = item;
                                return(
                                    <div key={index}>   
                                        <h2 className="job__container__description__title">{text}</h2>
                                        <ul className="job__container__description__list" dangerouslySetInnerHTML={{ __html: content }}></ul>
                                    </div>
                                )
                            })
                        : null
                    }
                </article>
                <section className="job__container__group">
                    <aside className="job__container__group__aside">
                        <div className="job__container__group__aside__details">
                            <h3 className="job__container__group__aside__details__title">Job Details</h3>
                            <div className="job__container__group__aside__details__badges">
                                {Array.isArray(commitmentArray)
                                    ? commitmentArray.map((tags, index) => (
                                        <div key={index}>
                                            <Badge name={tags}/>
                                        </div>
                                    ))
                                    : <Badge name={commitment}/>
                                }
                                <Badge name={salaryString} />
                            </div>
                        </div>
                        <div className="job__container__group__aside__qualifications">
                            <h3 className="job__container__group__aside__qualifications__title">Qualifications</h3>
                            <div className="job__container__group__aside__qualifications__badges">
                                <div className="job__container__group__aside__qualifications__badges__list">{job.salarydescription}</div>
                            </div>
                        </div>
                        <div className="job__container__group__aside__benefits">
                            <h3 className="job__container__group__aside__benefits__title">Benefits</h3>
                            <div className="job__container__group__aside__benefits__badges">
                                {/* {
                                    benefits.map((item, index) =>{
                                        return(
                                            <Badge item={item} index={index}/>
                                        )
                                    })
                                } */}
                            </div>
                        </div>
                    </aside>
                    <aside className="job__container__group__aside-control">
                        <div className="job__container__group__aside-control__buttons">
                            <button className="job__container__group__aside-control__buttons__button apply">Apply now</button>
                            <button className="job__container__group__aside-control__buttons__button save">Save</button>
                        </div>
                        <Link className="job__container__group__aside-control__link">
                            <img src={link} alt="link_icon" className="job__container__group__aside-control__link__icon"/>
                            Go to the original vacancy
                        </Link>
                    </aside>
                </section>
            </section>
        </section>        
    )
}