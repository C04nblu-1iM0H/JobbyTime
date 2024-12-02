import Counter from "../../counter/counter";
import Checkboxes from "../checkboxes/checkboxes";
import {checkboxing, options} from '../../../const';
import '../ResumeForm/resumeform.scss';

export default function DataResumeForm({resume}){   
    const {name,salary, experienceLevel, jobprefor, work, radiobutton, site, gitHub,linkedIn, portFolioLink, filename} = resume;
    const handleCounter = (value) =>{
        console.log(value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }


    return(
        <form 
            className="modal__form" onSubmit={handleSubmit}
        >
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Application job title</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        // onChange={handleName}
                        value={name}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Minimum salary $/per year</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        // onChange={handleSalary}
                        value={salary}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Your experience level</label>
                    <select 
                        className="modal__form__container__group__select"
                        name="experienceLevel"
                        value={experienceLevel}
                        // onChange={handleSelectedExperienceLevel}
                    >
                        {
                            options.map((option, index) => {
                                const {name, description} = option;
                                return(
                                    <option key={index} selected={experienceLevel === name} value={name}>
                                        {description}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <hr className="modal__form__hr" />
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">What type of job you prefer?</label>
                    <div className="modal__form__container__group__wrapper">
                        <Checkboxes 
                            checkboxing={checkboxing}
                            jobPrefer={jobprefor}
                            // handleFilterChange={handleFilterChange}
                        />
                    </div>
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Your work experience</label>
                    <Counter 
                        currentCount = {work}
                        handleCounter={handleCounter}
                    />
                    <p className="modal__form__container__group__description">The number of full years of your work experience</p>
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Are you open to relocating?</label>
                    <div className="modal__form__container__group__elements">
                        <div className="modal__form__container__group__elements__radio">
                            <input 
                                className="modal__form__container__group__elements__radio__input" 
                                type="radio" 
                                value="yes" 
                                checked={radiobutton === "yes" ? radiobutton : true}
                                // onChange={handleChange}
                            />
                            <label className="modal__form__container__group__elements__radio__description">Yes</label>
                        </div>
                        <div className="modal__form__container__group__elements__radio">
                            <input 
                                className="modal__form__container__group__elements__radio__input" 
                                type="radio" 
                                value="no"
                                checked={radiobutton === "no" ? radiobutton : false}
                                // onChange={handleChange}
                            />
                            <label className="modal__form__container__group__elements__radio__description">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="modal__form__hr" />
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Website</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        // onChange={handleSite}
                        value={site}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">LinkedIn</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        // onChange={handleLinkedIn}
                        value={linkedIn}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">GitHub</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        // onChange={handleGitHub}
                        value={gitHub}
                    />
                </div>
            </div>
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Portfolio (link)</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        // onChange={handlePortFolioLink}
                        value={portFolioLink}
                        // value={portfolio || portFolioLink}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Portfolio (file)</label>
                    <div className="modal__form__container__group__addfile">
                        <label htmlFor="fileInput" className="modal__form__container__group__addfile__button">Choose file</label>
                        <input 
                            id="fileInput" 
                            className="modal__form__container__group__addfile__input" 
                            type="file" 
                            title="" 
                        />
                        <span 
                            className="modal__form__container__group__addfile__text" 
                            type="text" 
                        > {filename ? filename : "your .pdf portfolio (or .docx / .doc / .txt)"}</span>
                    </div>
                </div>
            </div>
            <div className="modal__form__block">
                <button type="submit" className="modal__form__block__button">Save and continue</button>
            </div>
        </form>
    )
}