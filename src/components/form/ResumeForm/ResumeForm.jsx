import Counter from "../../counter/counter";
import Checkboxes from "../checkboxes/checkboxes";
import {AppRouting, checkboxing, options} from '../../../const';
import './resumeform.scss';
import { useDispatch } from "react-redux";
import { setSteps } from "../../../store/stepSlice";
import ButtonComponent from "../../button/ButtonComponent/ButtonComponent";

export default function ResumeForm({
    formData, 
    handleChange, 
    handleSubmit,
    handleFilterChange,
    handleCounter,
    errors,
    currentRoute,
}){    
    const dispatch = useDispatch();
    return(
        <form 
            className="modal__form" onSubmit={handleSubmit}>
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Application job title</label>
                    <input 
                        className={`modal__form__container__group__input ${
                            errors.name ? "modal__form__container__group__input__error" : ""
                        }`}  
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Specify application job title"
                    />
                    {errors.name && (
                        <span className="modal__form__container__group__error-message">{errors.name}</span>
                    )}
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Minimum salary $/per year</label>
                    <input 
                        className={`modal__form__container__group__input ${
                            errors.salary ? "modal__form__container__group__input__error" : ""
                        }`}  
                        type="text"
                        value={formData.salary}
                        onChange={(e) => handleChange("salary", e.target.value)}
                        placeholder="Specify the minimum wage per year"
                    />
                    {errors.salary && (
                        <span className="modal__form__container__group__error-message">{errors.salary}</span>
                    )}
                </div>
            </div>
            <hr className="modal__form__hr" />
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Preffered Job Location</label>
                    <input 
                        className={`modal__form__container__group__input ${
                            errors.location ? "modal__form__container__group__input__error" : ""
                        }`}  
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        placeholder="Your Preferred Job Location type City"
                    />
                    {errors.salary && (
                        <span className="modal__form__container__group__error-message">{errors.salary}</span>
                    )}
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Your experience level</label>
                    <select 
                        className="modal__form__container__group__select"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={(e) =>handleChange("experienceLevel", e.target.value)}
                    >
                        {options.map((option, index) => {
                            const {name, description} = option;
                            return(
                                <option key={index} value={name}> 
                                    {description}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <hr className="modal__form__hr" />
            <div className="modal__form__container">
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Your work experience on similar job</label>
                    <Counter 
                        currentCount={formData.work} 
                        handleCounter={handleCounter}
                        errors={errors}
                    />
                    {errors.work && (
                        <span className="modal__form__container__group__error-message">{errors.work}</span>
                    )}
                </div>
                <div className="modal__form__container__group">
                    <label className="modal__form__container__group__label">Are you willing to relocate?</label>
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
                    <label className="modal__form__container__group__label">What type of job you prefer?</label>
                    <div 
                        className={`modal__form__container__group__wrapper ${
                            errors.jobprefor ? "modal__form__container__group__wrapper__error" : ""
                        }`}  
                        >
                        <Checkboxes 
                            checkboxing={checkboxing}
                            handleFilterChange={handleFilterChange}
                            formData={formData}
                            errors={errors}
                        />
                    </div>
                    {errors.jobprefor && (
                        <span className="modal__form__container__group__error-message">{errors.jobprefor}</span>
                    )}
                </div>
            </div>
            { currentRoute === AppRouting.ResumeBuilder && (
                <>
                    <hr className="modal__form__hr" />
                    <div className="modal__form__container">
                        <div className="modal__form__container__group">
                            <label className="modal__form__container__group__label">Website</label>
                            <input 
                                className="modal__form__container__group__input" 
                                type="text"
                                value={formData.site}
                                onChange={(e) => handleChange("site", e.target.value)}
                                placeholder="Link to your website"
                            />
                        </div>
                        <div className="modal__form__container__group">
                            <label className="modal__form__container__group__label">LinkedIn</label>
                            <input 
                                className="modal__form__container__group__input" 
                                type="text"
                                value={formData.linkedIn}
                                onChange={(e) => handleChange("linkedIn", e.target.value)}
                                placeholder="Link to your LinkedIn"
                            />
                        </div>
                        <div className="modal__form__container__group">
                            <label className="modal__form__container__group__label">GitHub</label>
                            <input 
                                className="modal__form__container__group__input" 
                                type="text"
                                value={formData.gitHub}
                                onChange={(e) => handleChange("gitHub", e.target.value)}
                                placeholder="Link to your GitHub"
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
                                placeholder="Link to your Portfolio (link)"
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
                                />
                                <span className="modal__form__container__group__addfile__text">your .pdf portfolio (or .docx / .doc / .txt)</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
            
            <div className="modal__form__block">
                {currentRoute === AppRouting.Onboard && (
                    <ButtonComponent 
                        ClickFunction={ () => dispatch(setSteps({ step: 'step1', value: false }))}
                        classNameButton={"modal__footer__button"}
                        textButton={"Close"}
                    />
                )}
                {/* <ButtonComponent 
                        type="submit"
                        classNameButton={"modal__form__block__button"}
                        textButton={currentRoute === AppRouting.Onboard ? "Save and Continue" : "Save and Find Relevant Jobs"}
                /> */}
                <button
                    type="submit"
                    className="modal__form__block__button"
                >
                    <p>{currentRoute === AppRouting.Onboard ? "Find Relevant Jobs" : "Save and Find Relevant Jobs"}</p>
                </button>
            </div>
        </form>
    )
}