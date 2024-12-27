
export default function ListTariffPlan(){
    return(
        <ul className="tariff-plan__container">
            <li className="tariff-plan__container__item">
                <div className="tariff-plan__container__item__header">
                    <p  className="tariff-plan__container__item__header__subtitle">1 week</p>
                    <h3 className="tariff-plan__container__item__header__title">$19/week</h3>
                    <p  className="tariff-plan__container__item__header__description">$19 total</p>
                </div>
                <div className="tariff-plan__container__item__body">
                    <ul className="tariff-plan__container__item__body__list">
                        <li className="tariff-plan__container__item__body__list__item">Up to 100 job applications daily</li>
                        <li className="tariff-plan__container__item__body__list__item">1 resumes</li>
                        <li className="tariff-plan__container__item__body__list__item">Unlimited cover letter generation</li>
                    </ul>
                    <ul className="tariff-plan__container__item__body__list">
                        <li className="tariff-plan__container__item__body__list__item">Flexible location settings</li>
                        <li className="tariff-plan__container__item__body__list__item">Company blacklist</li>
                        <li className="tariff-plan__container__item__body__list__item">ChatGPT 4o-mini</li>
                    </ul>
                </div>
                <div className="tariff-plan__container__item__footer">
                    <button className="tariff-plan__container__item__footer__button">Get now</button>
                </div>
            </li>
            <li className="tariff-plan__container__item item-active">
                <div className="tariff-plan__container__item__header header-active">
                    <p  className="tariff-plan__container__item__header__subtitle subtitle-active">1 month</p>
                    <h3 className="tariff-plan__container__item__header__title titel-active">$12/week</h3>
                    <p  className="tariff-plan__container__item__header__description">$49 total</p>
                </div>
                <div className="tariff-plan__container__item__body">
                    <ul className="tariff-plan__container__item__body__list list-active">
                        <li className="tariff-plan__container__item__body__list__item">Up to 100 job applications daily</li>
                        <li className="tariff-plan__container__item__body__list__item">1 resumes</li>
                        <li className="tariff-plan__container__item__body__list__item">Unlimited cover letter generation</li>
                    </ul>
                    <ul className="tariff-plan__container__item__body__list">
                        <li className="tariff-plan__container__item__body__list__item">Flexible location settings</li>
                        <li className="tariff-plan__container__item__body__list__item">Company blacklist</li>
                        <li className="tariff-plan__container__item__body__list__item">ChatGPT 4o-mini</li>
                    </ul>
                </div>
                <div className="tariff-plan__container__item__footer">
                    <button className="tariff-plan__container__item__footer__button button-active">Get now</button>
                </div>
            </li>
            <li className="tariff-plan__container__item">
                <div className="tariff-plan__container__item__header">
                    <p  className="tariff-plan__container__item__header__subtitle">2 weeks</p>
                    <h3 className="tariff-plan__container__item__header__title">$17/week</h3>
                    <p  className="tariff-plan__container__item__header__description">$34 total</p>
                </div>
                <div className="tariff-plan__container__item__body">
                    <ul className="tariff-plan__container__item__body__list">
                        <li className="tariff-plan__container__item__body__list__item">Up to 100 job applications daily</li>
                        <li className="tariff-plan__container__item__body__list__item">1 resumes</li>
                        <li className="tariff-plan__container__item__body__list__item">Unlimited cover letter generation</li>
                    </ul>
                    <ul className="tariff-plan__container__item__body__list">
                        <li className="tariff-plan__container__item__body__list__item">Flexible location settings</li>
                        <li className="tariff-plan__container__item__body__list__item">Company blacklist</li>
                        <li className="tariff-plan__container__item__body__list__item">ChatGPT 4o-mini</li>
                    </ul>
                </div>
                <div className="tariff-plan__container__item__footer">
                        <button className="tariff-plan__container__item__footer__button">Get now</button>
                </div>
            </li>
        </ul>
    )
}