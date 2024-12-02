import JobCard from "../JobCard/JobCard";
import del from "../../assets/apply/delete_icon.svg"
import { useLocation } from "react-router-dom";
import { AppRouting } from "../../const";

export default function JobList({list}){
    const route = useLocation();    
    return(
        <div className="job">
            {list.map((job, index) => {                             
                return(
                    <ul key={`job-${index}`} className="job__list">
                    {
                        route.pathname === AppRouting.AutoApply 
                        ? (
                            <li className="job__list__item">
                                <button className="job__list__item__button">
                                    <img className="job__list__item__button__icon" src={del} alt="del_icon" />
                                </button>
                            </li>
                        ) : null
                    }
                    <li className="job__list__item">
                        <JobCard job={job} />
                    </li>
                </ul>
                )}
            )}
        </div>
    )
}