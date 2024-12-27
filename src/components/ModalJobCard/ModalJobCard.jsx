import { useLocation } from "react-router-dom";
import { formatDateDifference } from "../../utils/date";
import { AppRouting } from "../../const";
import Badge from "../badge/badge";
import BadgeStatus from "../BadgeStatus/BadgeStatus";
import CoverLetterAndResumeButton from "../button/CoverLetterAndResumeButton/CoverLetterAndResumeButton";
import coverLatter from '../../assets/apply/cover_latter.svg';

export default function ModalJobCard({ job, setLoadingJobId }) {
    // const categories = JSON.parse(job.categories);
    // const { commitment, location, team } = categories;

    const { commitment, location, team, creationTime } = job.categories;
    // const creationTime = formatDateDifference(job.updatedat);

    return (
        <section className="job__card">
            <div className="job__card__header">
                <h3 className="job__card__header__subtitle">{team}</h3>
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
            </div>
            <CoverLetterAndResumeButton job={job} setLoadingJobId={setLoadingJobId}/>
        </section>
    );
}
