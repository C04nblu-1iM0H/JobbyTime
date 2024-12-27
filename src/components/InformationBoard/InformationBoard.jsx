import ai from '../../assets/onboard/ai.svg';
import arrow_left from '../../assets/onboard/arrow_left.svg';

export default function InformationBoard(){
    return(
        <div className="onboard__information-board">
            <div className="onboard__information-board__container">
                <h2 className="onboard__information-board__container__title">
                    Get 10x more interviews and get hired faster
                </h2>
                <p className="onboard__information-board__container__description">
                    We will find jobs perfect for you, generate or adapt your resume and cover letter exactly
                    for each suitable vacancy, apply and send a notification when we receive a response
                </p>
                <button className="onboard__information-board__container__button">
                    <div className="onboard__information-board__container__button__block">
                        <h5 className="onboard__information-board__container__button__block__title">Get 1 mounth for $99</h5>
                        <p className="onboard__information-board__container__button__block__description">only $23/week</p>
                    </div>
                    <img src={arrow_left} alt="arrow_left"/>
                </button>
            </div>
            <img className="onboard__information-board__image" src={ai} alt="AI" />
        </div>
    )
}