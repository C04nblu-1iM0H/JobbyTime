import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import arrow from "../../assets/job/arrow_left.svg";
import { PolicyTitle, PolicyMainContent } from "../../const";
import './policy.scss';


export default function PrivatePolicyScreen(){
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return(
        <section className="headers policy ">
            <Breadcrumbs />
            <div className="headers__title">
                <Link 
                    onClick={goBack}
                    className="headers__title__button"
                >
                    <img src={arrow} alt="arrow_left"/>
                </Link>
                <h1 className="headers__title__text">Privacy Policy & Terms of Use</h1>
            </div>
            <p className="policy__description">{PolicyTitle.title}</p>
            <div className="policy__list">
                {
                    PolicyMainContent.map((item, index) => {
                        const {title, description} = item;
                        return(
                            <div key={index} className="policy__list__item">
                                <h2 className="policy__list__item__title">{title}</h2>
                                {
                                    Array.isArray(description)
                                    ?description.map((item, index) =>{
                                        const {text} = item;
                                        return(
                                            <p key={index} className="policy__list__item__descriptions">{text}</p>
                                        )
                                    })  
                                    :(<p className="policy__list__item__description">{description}</p>)
                                }
                            </div>   
                           
                        )
                    })
                }
            </div>
        </section>
    )
}