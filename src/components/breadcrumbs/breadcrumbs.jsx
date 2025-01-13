import { Link } from "react-router-dom";
import { AppRouting } from "../../const";
import arrowRight from '../../assets/job/arrow_right.svg'


export default function Breadcrumbs({currenturl}){
    return(
        <nav className="breadcrumbs">
            <Link to={AppRouting.JobBoard} className="breadcrumbs__link">
                Home Page
            </Link>
            <img src={arrowRight} alt="arrow_right"/>
            <span className="breadcrumbs__current">{currenturl} </span>
        </nav>
    )
}