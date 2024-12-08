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
            const response = await axios.post(API.GET_BOARD,{},{
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
            setJob(data.filter(item => item.id_posting === jobId));
        }
    }, [isSuccess, data, jobId]);
    
    if(isLoading) return (
        <Loader />
    )
    
    return(
        job.map((el, index) => {
            const {text_posting, salarydescription} = el;
            const content = JSON.parse(el.content);
            const categories = JSON.parse(el.categories);
            const salary = JSON.parse(el.salaryrange);
            const creationTime = formatDateDifference(el.createdat);
            const {commitment, location, team} = categories
            const {lists, description} = content; 
            const {min, max } = salary;      
            const salaryString= `$${numberWithCommas(min)}-$${numberWithCommas(max)} a year`;
            
            return(
                <section className="job headers" key={index}>
                    <Breadcrumbs currenturl={text_posting} />
                    <div className="headers__title">
                        <Link 
                            onClick={goBack}
                            className=" headers__title__button"
                        >
                            <img src={arrow} alt="arrow_left"/>
                        </Link>
                        <h1 className="headers__title__text">{text_posting}</h1>
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
                            {
                                lists.map((item, index) =>{
                                    const {text, content} = item;
                                    return(
                                        <div key={index}>   
                                            <h2 className="job__container__description__title">{text}</h2>
                                            <ul className="job__container__description__list" dangerouslySetInnerHTML={{ __html: content }}></ul>
                                        </div>
                                    )
                                })
                            }
                        </article>
                        <section className="job__container__group">
                            <aside className="job__container__group__aside">
                                <div className="job__container__group__aside__details">
                                    <h3 className="job__container__group__aside__details__title">Job Details</h3>
                                    <div className="job__container__group__aside__details__badges">
                                        <div className="job__container__group__aside__details__badges-left">
                                            <Badge name={commitment}/>
                                        </div>
                                        <Badge name={salaryString} />
                                    </div>
                                </div>
                                <div className="job__container__group__aside__qualifications">
                                    <h3 className="job__container__group__aside__qualifications__title">Qualifications</h3>
                                    <div className="job__container__group__aside__qualifications__badges">
                                        <div className="job__container__group__aside__qualifications__badges__list">{salarydescription}</div>
                                    </div>
                                </div>
                                {/* <div className="job__container__group__aside__benefits">
                                    <h3 className="job__container__group__aside__benefits__title">Benefits</h3>
                                    <div className="job__container__group__aside__benefits__badges">
                                        {
                                            benefits.map((item, index) =>{
                                                return(
                                                    <Badge item={item} index={index}/>
                                                )
                                            })
                                        }
                                    </div>
                                </div> */}
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
        })
        
    )
}