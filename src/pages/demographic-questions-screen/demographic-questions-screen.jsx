import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import arrow from "../../assets/job/arrow_left.svg";
import DemographicQuestions from "../../components/DemographicQuestions/DemographicQuestions";

export default function DemographiQuestionsScreen(){
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return(
        <section className="headers policy ">
            <Breadcrumbs currenturl={"U.S. Standard Demographic Questions"}/>
            <div className="headers__title">
                <Link 
                    onClick={goBack}
                    className="headers__title__button"
                >
                    <img src={arrow} alt="arrow_left"/>
                </Link>
                <h1 className="headers__title__text">U.S. Standard Demographic Questions</h1>
            </div>
            <DemographicQuestions />
        </section>
    )
}