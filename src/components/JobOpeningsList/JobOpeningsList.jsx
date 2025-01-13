import { useState } from "react";
import JobOpeningsCard from "../JobOpeningsCard/JobOpeningsCard";
import { useSelector } from "react-redux";

export default function JobOpeningsList({jobs, setSelectedJobs, selectedJobs}){
    const freePlan = useSelector( state => state.step.freeplan);
    const toggleJobSelection = (id) => {
        setSelectedJobs((prev) =>
            prev.includes(id)
            ? prev.filter((jobId) => jobId !== id)
            : [...prev, id]
            
        );
    };

    const addingOneVacancy = (id) => {
        setSelectedJobs((prev) => {
            if (prev.includes(id)) {
                return [];
            }
            return [id];
        });
    }
    
    const isSelectedAll = selectedJobs.length === jobs.length;
    
    const toggleSelectAll = () => {
        if (isSelectedAll) {
            setSelectedJobs([]);
        } else {
            setSelectedJobs(jobs.map((job) => job.id_posting));
        }
    };

    return(
        <section className="job-openings">
            {freePlan &&(
                <div className="job-openings__сhoice">
                    <input
                        type="checkbox"
                        checked={isSelectedAll}
                        onChange={toggleSelectAll}
                        className="job-openings__сhoice__input"
                    />
                    <label className="job-openings__сhoice__label">All vacancies</label>
                </div>
            )}
            
            <ul className="job-openings__list">
            {
                jobs.map((job) =>(
                    <JobOpeningsCard 
                        key={job.id_posting}
                        job={job}
                        isSelected={selectedJobs.includes(job.id_posting)}
                        onToggle={toggleJobSelection}
                        onAdd={addingOneVacancy}
                    />
                ))
            }
            </ul>
        </section>
    )
}