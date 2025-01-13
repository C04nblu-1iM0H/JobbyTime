
import { formatDateDifference } from "../../utils/date";
import Badge from "../badge/badge";
import coverLatter from '../../assets/apply/cover_latter.svg';
import resume_ai from '../../assets/apply/resume_ai.svg';

export default function ModalJobCard({ job, setJobId }) {
    const categories = JSON.parse(job.categories);
    const { commitment, location, team } = categories;
    const creationTime = formatDateDifference(job.updatedat);
    setJobId(job.id_posting);
    return (
        <section className="jobs-modal__card">
            <div className="jobs-modal__card__header">
                <h3 className="jobs-modal__card__header__subtitle">{team}</h3>
                <h2 className="jobs-modal__card__header__title">{job.text_posting}</h2>
            </div>
            <div className="jobs-modal__card__footer">
                <div className="jobs-modal__card__footer__tags">
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
            <div className="jobs-modal__card__footer__actions">
                <button 
                    type="button"
                    className="jobs-modal__card__footer__actions__edit-button"
                >
                    View/Edit Cover Letter
                    <img
                        className="jobs-modal__card__footer__actions__icon"
                        src={coverLatter}
                        alt="cover_letter_icon"
                    />
                </button>
                <button className="jobs-modal__card__footer__actions__resume-button">
                    View Resume
                    <img className="jobs-modal__card__footer__actions__icon" src={resume_ai} alt="resume_icon" />
                </button>
            </div>
        </section>
    );
}
