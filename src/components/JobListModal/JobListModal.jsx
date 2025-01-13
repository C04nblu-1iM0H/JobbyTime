import del from "../../assets/apply/delete_icon.svg";
import { useLocation } from "react-router-dom";
import { AppRouting } from "../../const";
import { useState } from "react";
import Loader from "../loader/loader";
import ModalJobCard from "../ModalJobCard/ModalJobCard";

export default function JobListModal({ list = [], setJobId }) {
    const [loadingJobId, setLoadingJobId] = useState(null);
    const route = useLocation().pathname;
    return (
        <ul className="jobs">
            {list?.map((job, index) => {
                if (loadingJobId === job.id_posting) {
                    return (
                        <li key={`loader-${index}`} className="jobs__list__loader">
                            <Loader />
                        </li>
                    );
                }
                return (
                    <div key={`job-${index}`} className="jobs__list">
                        {route === AppRouting.AutoApply || route === AppRouting.Onboard ? (
                            <li className="jobs__list__item">
                                <button className="jobs__list__item__button">
                                    <img className="jobs__list__item__button__icon" src={del} alt="del_icon" />
                                </button>
                            </li>
                        ) : null}
                        <li className="jobs__list__item">
                            <ModalJobCard job={job} setJobId={setJobId}/> 
                        </li>
                    </div>
                );
            })}
        </ul>
    );
}
