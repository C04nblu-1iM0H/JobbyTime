import { useSelector } from 'react-redux';
import arrow from '../../assets/onboard/arrow_right.svg';
import Badge from '../badge/badge';

export default function JobOpeningsCard({ job, isSelected, onToggle, onAdd }){
    const {team, commitment, location, creationTime} = job.categories;
    
    const freePlan = useSelector( state => state.step.freeplan);
    return(
        <li className='item'>
            {!freePlan
                ?(
                    <div className="item__choice">
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => onToggle(job.id_posting)}
                            className="item__choice__input"
                        />
                    </div>
                ):(
                    <div className="item__choice">
                        <input
                            type="radio"
                            checked={isSelected}
                            onChange={()=>onAdd(job.id_posting)}
                            className="item__choice__input"
                        />
                    </div>
                )
            }
            
            <section className={`item__card ${isSelected ? "active" : ""}`}>
                <div className="item__card__header">
                    <p className="item__card__header__company">{team}</p>
                    <button className="item__card__header__button">
                        Tailor CV&CL only for this job
                        <img className="item__card__header__button__icon" src={arrow} alt="arrow_icon" />
                    </button>
                </div>
                <h3 className="item__card__title">{job.text_posting}</h3>
                <div className="item__card__footer">
                    <div className="item__card__footer__operating-mode">
                        {Array.isArray(commitment)
                            ? commitment.map((tags, index) => (
                                <div key={index}>
                                    <Badge name={tags}/>
                                </div>
                            ))
                            : <Badge name={commitment}/>
                        }
                    </div>
                    <div className='item__card__footer__information'>
                        <Badge  name={location} city="city"/>
                        <Badge  name={creationTime} time="time"/>
                    </div>
                </div>
            </section>
        </li>
    )
}