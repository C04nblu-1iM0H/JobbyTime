import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import arrow from '../../assets/job/arrow_left.svg'
import link from '../../assets/job/link.svg'
import Badge from "../../components/badge/badge";
import { infoOfJob, details, benefits, qualifications } from "../../const";

export default function JobScreen(){
    return(
        <section className="job headers">
            <Breadcrumbs />
            <div className="headers__title">
                <Link className=" headers__title__button">
                    <img src={arrow} alt="arrow_left"/>
                </Link>
                <h1 className="headers__title__text">Senior Software Developer</h1>
            </div>
            <div className="job__list">
                {
                    infoOfJob.map((item, index) =>{
                        return(
                            <Badge item={item} index={index}/>
                        )
                    })
                }
            </div>
            <section className="job__container">
                <article className="job__container__description">
                    <h2 className="job__container__description__title">Company Description</h2>
                    <p className="job__container__description__text">
                        Freshworks makes it fast and easy for businesses to delight their customers and employees. 
                        We do this by taking a fresh approach to building and delivering software that is affordable, 
                        quick to implement, and designed for the end user. Headquartered in San Mateo, California, 
                        Freshworks has a global team operating from 13 global locations to serve more than 
                        65,000 companies - from startups to public companies – that rely on Freshworks 
                        software-as-a-service to enable a better customer experience (CRM, CX) and employee experience (ITSM).
                    </p>
                    <p className="job__container__description__text">
                        Freshworks is featured in global national press including CNBC, Forbes, Fortune, 
                        Bloomberg and has been a BuiltIn Best Place to work in San Francisco and Denver for the last 3 years. 
                        Our customer ratings have earned Freshworks products TrustRadius Top Rated Software ratings 
                        and G2 Best of Awards for Best Feature Set, Best Value for the Price and Best Relationship.
                    </p>
                </article>
                <section className="job__container__group">
                    <aside className="job__container__group__aside">
                        <div className="job__container__group__aside__details">
                            <h3 className="job__container__group__aside__details__title">Job Details</h3>
                            <div className="job__container__group__aside__details__badges">
                                {
                                    details.map((item, index) =>{
                                        return(
                                            <Badge item={item} index={index}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="job__container__group__aside__benefits">
                            <h3 className="job__container__group__aside__benefits__title">Benefits</h3>
                            <div className="job__container__group__aside__benefits__badges">
                                {
                                    benefits.map((item, index) =>{
                                        return(
                                            <Badge item={item} index={index}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="job__container__group__aside__qualifications">
                            <h3 className="job__container__group__aside__qualifications__title">Qualifications</h3>
                            <div className="job__container__group__aside__qualifications__badges">
                                {
                                    qualifications.map((item, index) =>{
                                        return(
                                            <Badge item={item} index={index}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </aside>
                    <aside className="job__container__group__aside-control">
                        <div className="job__container__group__aside-control__buttons">
                            <button className="job__container__group__aside-control__buttons__button apply">Apply now</button>
                            <button className="job__container__group__aside-control__buttons__button save">Save</button>
                        </div>
                        <Link className="job__container__group__aside-control__link">
                            <img src={link} alt="link_icon" className="job__container__group__aside-control__link__icon"/>
                            Go to the original vacancy
                        </Link>
                    </aside>
                </section>
            </section>
        </section>
    )
}