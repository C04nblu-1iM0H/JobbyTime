import { Link } from "react-router-dom";
import { integrationsData } from "../../const";
import { GoArrowUpRight } from "react-icons/go";


export default function Integrations(){
    return(
        <section className="integrations">
            <h2 className="integrations__title">Recommended Integrations</h2>
            <section className="integrations__list">
                {
                    integrationsData.map(integrationsData =>(
                        <div 
                            key={integrationsData.id}
                            className="integrations__list__item"
                        >
                            <div className="integrations__list__item__header">
                                <img  src={integrationsData.icon} alt="icon"/>
                                <Link 
                                    className="integrations__list__item__header__btn"
                                    to={ integrationsData.id === 1 ? `https://sandbox-lever.auth0.com/authorize?client_id=aoSOpqcIcjLsmpmktUlRcruFEQmmiZ2g&redirect_uri=https://jobbyti.me&state=vgG5sHr6&response_type=code&scope=postings:write:admin uploads:write:admin offline_access&audience=https://api.sandbox.lever.co/v1/`: ""}
                                >
                                    Connect
                                </Link>
                            </div>
                            <h4 className="integrations__list__item__title">{integrationsData.title}</h4>
                            {integrationsData.badge &&(
                                <div className="integrations__list__item__bage">
                                    <p className="integrations__list__item__bage__description">{integrationsData.badge} <span className="integrations__list__item__bage__sales">{integrationsData.forSale}</span></p>
                                </div>
                            )}
                            <p className="integrations__list__item__description">{integrationsData.description}</p>
                        </div>
                    ))
                }
            </section>
        </section>
    )
}

