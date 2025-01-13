import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import arrow from "../../assets/job/arrow_left.svg";
import Integrations from "../../components/Integrations/Integrations";


export default function IntegrationsScreen(){
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return(
        <section className="headers">
            <Breadcrumbs currenturl={"Integrations"}/>
            <div className="headers__title">
                <Link 
                    onClick={goBack}
                    className="headers__title__button"
                >
                    <img src={arrow} alt="arrow_left"/>
                </Link>
                <h1 className="headers__title__text">Integrations</h1>
            </div>
            <Integrations />
        </section>
    )
}