import { useState } from "react";
import Badge from "../badge/badge";
import douwnload from "../../assets/resume/download.svg";
import share from "../../assets/resume/share.svg";
import arrowButton from "../../assets/resume/arrow_button.svg";
import arrowTop from "../../assets/resume/arrow_top.svg";
import del from "../../assets/resume/del.svg";
import ResumeDataGeneration from "../form/ResumeDataGeneration/ResumeDataGeneration";

export default function ResumeCard({listResume}){
    const [isInfoForApplication, setIsInfoApplication] = useState(false);
    const percent = "100%";
    return(
            listResume.map((resume, index) => {                
                const { filename} = resume;
                return(
                    <>
                        <section key={index} className="resume__list__item">
                            <div className="resume__list__item__header">
                                <h1 className="resume__list__item__header__title">11/04/2024</h1>
                                <div className="resume__list__item__header__score">
                                    <p className="resume__list__item__header__score__text">Resume score</p>
                                    <Badge name={percent}/>
                                </div>
                            </div>
                            <h1 className="resume__list__item__title">{filename}</h1>
                            <div className="resume__list__item__footer">
                                <div className="resume__list__item__footer__group-btns">
                                    <button className="resume__list__item__footer__group-btns__button">
                                        Download
                                        <img src={douwnload} alt="icon" className="icon"/>
                                    </button>
                                    <button className="resume__list__item__footer__group-btns__button">
                                        <img src={share} alt="icon__share"/>
                                    </button>
                                </div>
                                <div className="resume__list__item__footer__applications">
                                    <button 
                                        className="resume__list__item__footer__applications__button"
                                        onClick={() => setIsInfoApplication(!isInfoForApplication)}
                                    >
                                        Info for applications
                                    </button>
                                    {
                                        isInfoForApplication ? <img src={arrowTop} alt="arrow_icon" className="resume__list__item__footer__applications__icon" /> : <img src={arrowButton} alt="arrow_icon" className="resume__list__item__footer__applications__icon" />
                                    }
                                </div>
                                <div className="resume__list__item__footer__del">
                                    <button 
                                        className="resume__list__item__footer__del__button"
                                    >
                                        Delete
                                        <img src={del} alt="del_btn" className="resume__list__item__footer__del__icon"/>
                                    </button>
                                </div>
                            </div>
                        </section>
                        {
                            isInfoForApplication && (
                                <ResumeDataGeneration resume={resume} active={isInfoForApplication}/>
                            )
                        } 
                    </>
                )
            })
        


        
    )
}