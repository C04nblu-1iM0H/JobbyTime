import { useLocation } from "react-router-dom";
import { AppRouting } from "../../../const";
import coverLatter from '../../../assets/apply/cover_latter.svg';
import resume_ai from '../../../assets/apply/resume_ai.svg';
import cover_result from "../../../assets/apply/cover_results.svg";
import Apply from "../../apply/apply";

export default function CoverLetterAndResumeButton({job, setLoadingJobId}){
    const currentRoute = useLocation().pathname;
    
    return(
        <div className="job__card__footer__actions job__card__actions">
            <button
                className={`job__card__footer__actions__edit-button job__card__actions__edit-button ${
                    currentRoute === AppRouting.AppliedResults
                        ? "job__card__footer__actions__edit-results"
                        : null
                }`}
            >
                View/Edit Cover Letter
                {currentRoute === AppRouting.AppliedResults ? (
                    <img
                        className="job__card__footer__actions__icon"
                        src={cover_result}
                        alt="cover_letter_icon"
                    />
                ) : (
                    <img
                        className="job__card__footer__actions__icon job__card__actions__icon"
                        src={coverLatter}
                        alt="cover_letter_icon"
                    />
                )}
            </button>
            <button className="job__card__footer__actions__resume-button job__card__actions__resume-button">
                View Resume
                <img className="job__card__footer__actions__icon job__card__actions__icon" src={resume_ai} alt="resume_icon" />
            </button>
            {currentRoute === AppRouting.AutoApply ? (
                <Apply job={job} setLoadingJobId={setLoadingJobId} />
            ) : null}
        </div>
    )
}