import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AsideJobs, AsideProfile, AsideAiTools, AppRouting, TitleMenu } from '../../const';
import ListAiTools from '../ListAiTools/ListAiTools';
import ListJobs from '../ListJobs/ListJobs';
import logo from '../../assets/logo.svg'
import LinkComponent from "../LinkComponent/LinkComponent";
import icon_mail from "../../assets/header/mail.svg";
import './sidebar.scss'

function Sidebar(){
    const currentRoute = useLocation().pathname;
    return(
        <aside className="aside">
            <div className="aside__block">
                <img className='aside__block__logo' src={logo} alt="logo"/>
            </div>
            <nav className="aside__menu">
                <ul className="aside__menu__list">
                    <li className="aside__menu__list__title">
                        <p className='aside__menu__list__title__description'>{TitleMenu.user}</p>
                    </li>
                    <LinkComponent
                        root={AppRouting.Profile} 
                        path={AsideProfile.path}
                        fill={currentRoute === AsideProfile.root ? "hsla(89, 82%, 71%, 1)" : "hsla(0, 0%, 24%, 1)"}
                        description={AsideProfile.profile}
                        activeItem={currentRoute === AsideProfile.root ? "aside__menu__list__item-active" : null}
                        activeDescription={currentRoute === AsideProfile.root ? "aside__menu__list__item__description-active" : null}
                    />

                </ul>
                <ul className="aside__menu__list">
                    <li className="aside__menu__list__title">
                        <p className='aside__menu__list__title__description'>{TitleMenu.tools}</p>
                    </li>
                    <ListAiTools tools={AsideAiTools}/>
                </ul>
                <ul className="aside__menu__list">
                    <li className="aside__menu__list__title">
                        <p className='aside__menu__list__title__description'>{TitleMenu.jobs}</p>
                    </li>
                    <ListJobs jobs={AsideJobs}/>
                </ul>
            </nav>
            <div className="aside__mail">
                <p className="aside__mail__help">Need help? Contact us</p>
                <div className="aside__mail__group">
                    <img src={icon_mail} alt="icon_mail" />
                    <p className="aside__mail__group__description">help@jobbytime.com</p>
                </div>   
                <p className="aside__mail__info-mail"> Mo-Fr 10:00-22:00 (GMT+04:00) Reply ETA 24h</p>
                <Link to={AppRouting.PrivatePolicy} className="aside__mail__link">Privacy Policy & Terms of Use</Link>
            </div>
        </aside>
    );
}

export default Sidebar;