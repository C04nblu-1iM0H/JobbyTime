import JobCard from "../JobCard/JobCard";
import del from "../../assets/apply/delete_icon.svg";
import { useLocation } from "react-router-dom";
import { AppRouting } from "../../const";
import { useState } from "react";
import Loader from "../loader/loader";
import ModalJobCard from "../ModalJobCard/ModalJobCard";

export default function JobList({ list }) {
    const [loadingJobId, setLoadingJobId] = useState(null);
    const route = useLocation();

    return (
        <ul className="job">
            {list.map((job, index) => {
                if (loadingJobId === job.id_posting) {
                    return (
                        <li key={`loader-${index}`} className="job__list__loader">
                            <Loader />
                        </li>
                    );
                }
                return (
                    <div key={`job-${index}`} className="job__list">
                        {route.pathname === AppRouting.AutoApply || route.pathname === AppRouting.Onboard ? (
                            <li className="job__list__item">
                                <button className="job__list__item__button">
                                    <img className="job__list__item__button__icon" src={del} alt="del_icon" />
                                </button>
                            </li>
                        ) : null}
                        <li className="job__list__item">
                            { route.pathname === AppRouting.Onboard ?(
                                <ModalJobCard job={job} setLoadingJobId={setLoadingJobId}/>
                            ):(
                                <JobCard job={job} setLoadingJobId={setLoadingJobId} />
                            )}
                            
                        </li>
                    </div>
                );
            })}
        </ul>
    );
}
