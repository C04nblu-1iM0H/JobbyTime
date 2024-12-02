import Counter from "../../counter/counter";
import Checkboxes from "../checkboxes/checkboxes";
import {checkboxing, options} from '../../../const';
import './resumeform.scss';

export default function ResumeForm({
    formData, 
    handleChange, 
    handleSubmit,
    handleFilterChange,
    handleCounter,
    filename,
    OldFileName
}){    
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
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Minimum salary $/per year</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        value={formData.salary}
                        onChange={(e) => handleChange("salary", e.target.value)}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Your experience level</label>
                    <select 
                        className="modal__form__container__group__select"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={(e) =>
                            handleChange("experienceLevel", e.target.value)
                        }
                    >
                        {
                            options.map((option, index) => {
                                const {name, description} = option;
                                return(
                                    <option key={index} selected={formData.experienceLevel === name} value={name}>
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
                            handleFilterChange={handleFilterChange}
                            formData={formData}
                        />
                    </div>
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Your work experience</label>
                    <Counter currentCount={formData.work} handleCounter={handleCounter}/>
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
                                checked={formData.radiobutton === "yes"}
                                onChange={(e) => handleChange("radiobutton", e.target.value)}
                            />
                            <label className="modal__form__container__group__elements__radio__description">Yes</label>
                        </div>
                        <div className="modal__form__container__group__elements__radio">
                            <input 
                                className="modal__form__container__group__elements__radio__input" 
                                type="radio" 
                                value="no"
                                checked={formData.radiobutton === "no"}
                                onChange={(e) => handleChange("radiobutton", e.target.value)}
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
                        value={formData.site}
                        onChange={(e) => handleChange("site", e.target.value)}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">LinkedIn</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        value={formData.linkedIn}
                        onChange={(e) => handleChange("linkedIn", e.target.value)}
                    />
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">GitHub</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        value={formData.gitHub}
                        onChange={(e) => handleChange("gitHub", e.target.value)}
                    />
                </div>
            </div>
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Portfolio (link)</label>
                    <input 
                        className="modal__form__container__group__input" 
                        type="text"
                        value={formData.portFolioLink}
                        onChange={(e) => handleChange("portFolioLink", e.target.value)}
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
                        > {OldFileName || filename}</span>
                    </div>
                </div>
            </div>
            <div className="modal__form__block">
                <button type="submit" className="modal__form__block__button">Save and Find Relevant Jobs</button>
            </div>
        </form>
    )
}