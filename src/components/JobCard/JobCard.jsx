import { useLocation } from "react-router-dom";
import { formatDateDifference } from "../../utils/date";
import Apply from "../apply/apply";
import { AppRouting } from "../../const";
import Badge from "../badge/badge";
import BadgeStatus from "../BadgeStatus/BadgeStatus";
import coverLatter from '../../assets/apply/cover_latter.svg';
import resume_ai from '../../assets/apply/resume_ai.svg';
import cover_result from "../../assets/apply/cover_results.svg";

export default function JobCard({ job, setLoadingJobId }) {
    const categories = JSON.parse(job.categories);
    const { commitment, location, team } = categories;
    const creationTime = formatDateDifference(job.updatedat);
    const statusAutoApply = "Waiting in queue";
    const statusApplyResults = "Sent";
    const currentRoute = useLocation().pathname;

    return (
        <section className="job__card">
            <div className="job__card__header">
                <div className="job__card__header__wrapper">
                    <h3 className="job__card__header__wrapper__subtitle">{team}</h3>
                    {currentRoute === AppRouting.AutoApply ? (
                        <BadgeStatus status={statusAutoApply} />
                    ) : (
                        <BadgeStatus status={statusApplyResults} />
                    )}
                </div>
                <h2 className="job__card__header__title">{job.text_posting}</h2>
            </div>
            <div className="job__card__footer">
                <div className="job__card__footer__tags">
                    <Badge name={commitment} />
                    <Badge name={location} city="city" />
                    <Badge name={creationTime} time="time" />
                </div>
                <div className="job__card__footer__actions">
                    <button
                        className={`job__card__footer__actions__edit-button ${
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
                                className="job__card__footer__actions__icon"
                                src={coverLatter}
                                alt="cover_letter_icon"
                            />
                        )}
                    </button>
                    <button className="job__card__footer__actions__resume-button">
                        View Resume
                        <img className="job__card__footer__actions__icon" src={resume_ai} alt="resume_icon" />
                    </button>
                    {currentRoute === AppRouting.AutoApply ? (
                        <Apply job={job} setLoadingJobId={setLoadingJobId} />
                    ) : null}
                </div>
            </div>
        </section>
    );
}
