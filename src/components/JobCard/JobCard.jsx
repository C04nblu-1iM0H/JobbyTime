import { useLocation } from "react-router-dom";
import { formatDateDifference } from "../../utils/date";
import { AppRouting } from "../../const";
import Badge from "../badge/badge";
import BadgeStatus from "../BadgeStatus/BadgeStatus";
import CoverLetterAndResumeButton from "../button/CoverLetterAndResumeButton/CoverLetterAndResumeButton";
import coverLatter from '../../assets/apply/cover_latter.svg';

export default function JobCard({ job, setLoadingJobId }) {
    // const categories = JSON.parse(job.categories);
    // const { commitment, location, team } = categories;

    const { commitment, location, team, creationTime } = job.categories;
    // const creationTime = formatDateDifference(job.updatedat);
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
                    ) : currentRoute === AppRouting.AppliedResults? (
                        <BadgeStatus status={statusApplyResults} />
                    ) : (
                        <button className="job__card__footer__actions__edit-button">
                            View/Edit Cover Letter
                            <img
                                className="job__card__footer__actions__icon"
                                src={coverLatter}
                                alt="cover_letter_icon"
                            />
                        </button>
                    )}
                </div>
                <h2 className="job__card__header__title">{job.text_posting}</h2>
            </div>
            <div className="job__card__footer">
                <div className="job__card__footer__tags">
                    {Array.isArray(commitment)
                        ? commitment.map((tags, index) => (
                            <div key={index}>
                                <Badge name={tags}/>
                            </div>
                        ))
                        : <Badge name={commitment}/>
                    }
                    <Badge name={location} city="city" />
                    <Badge name={creationTime} time="time" />
                </div>
                <CoverLetterAndResumeButton job={job} setLoadingJobId={setLoadingJobId}/>
            </div>
        </section>
    );
}
