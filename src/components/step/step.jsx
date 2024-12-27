import { bageStatus, steps } from "../../const";
import SVGComponent from '../../components/svgComponent/svgComponent';
import { useSelector } from "react-redux";
import { isActiveStep } from "../../utils/isActiveStep";
import active from '../../assets/onboard/round_active.svg'; 
import Badge from "../badge/badge";
import StepsButton from "../StepsButton/StepsButton";

export default function Step({handleStart}){
    const done = useSelector( state => state.step.done);
    
    return(
        <div className="onboard__step">
            <h2 className="onboard__step__title">Onboarding</h2>
            <div className="onboard__step__container">
            {
                steps.map(step =>{
                    const { id, path, name } = step;
                    const stepKey = `stepDone${id}`;
                    const isStepDone = done[stepKey];
                    const isActive = isActiveStep(step.id, done);
                    return(
                        <div 
                            className={`onboard__step__container__item ${isActive  ? "active" : ""}`}
                            key={id}
                        >
                            <div className="onboard__step__container__item__header">
                                <span 
                                    className={`onboard__step__container__item__header__title ${isActive ? "title-active" : ""}`}
                                >
                                    {isActive  && (
                                        <div className="round-active">
                                            <img src={active} alt="active_icon" /> 
                                        </div>
                                    )}
                                    Step {step.id}
                                </span>
                                <SVGComponent 
                                    path={path}
                                    fill={"hsla(234, 84%, 78%, 1)"}
                                    width={"30px"}
                                    height={"30px"}
                                />
                            </div>
                            <p className='onboard__step__container__item__description'>{name}</p>
                            {isStepDone && (
                                <div className="onboard__step__container__item__badges">
                                    {bageStatus
                                        .filter((status) => status.id === id)
                                        .map((status) => (
                                        <Badge key={status.id} name={status.statusName}/>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })
            }                    
            </div>
            <StepsButton handleStart={handleStart}/>
        </div>
    )
}