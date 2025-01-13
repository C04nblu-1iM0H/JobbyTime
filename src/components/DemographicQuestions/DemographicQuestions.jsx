import { useMutation } from '@tanstack/react-query';
import { useState } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';
import QuestionsComponent from "./QuestionsComponent";
import { genders, ProtectedStatus, ethnicityQuestion, RacialQuestion, transgenders, ChronicQuestion, sponsorshipFuture, API } from "../../const";
import EthnicityQuestion from "./EthnicityQuestion";
import ButtonComponent from "../button/ButtonComponent/ButtonComponent";


export default function DemographicQuestions(){
    const token = useSelector(state => state.token.token);
    const [formData, setFormData] = useState({
        gender: "",
        protecteVeteranStatus:"",
        checkboxEthnicityQuestion: [],
        checkboxRacialQuestion: [],
        transgender:"",
        chronicQuestion:"",
        sponsorship:"",
    }); 

    const clearAllMutation = useMutation(() => {
        return fetch('/api/clear-all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}), // Отправляем пустые данные
        });
    });
    
    const saveMutation = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(API.RESUME_FROM, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });          
            return response; 
        },
        onSuccess: (response) => {
            console.log(response);
            
        },
        onError: (error) => {
            console.error('Error sending data:', error);
        },
    });

    const handleOptionChangeGender = (gender) => {
        setFormData((prev) => ({
            ...prev,
            gender: gender,
        }));
    };
    const handleOptionChangeProtectedStatus = (Status) => {
        setFormData((prev) => ({
            ...prev,
            protecteVeteranStatus: Status,
        }));
    };

    const handleOptionChangeCheckboxEthnicity = (value, checked) =>{
        setFormData((prev) => ({
            ...prev,
            checkboxEthnicityQuestion: checked
                ? [...prev.checkboxEthnicityQuestion, value]
                : prev.checkboxEthnicityQuestion.filter((item) => item !== value),
        }));
    }

    const handleOptionChangeCheckboxRacial = (value, checked) =>{
        setFormData((prev) => ({
            ...prev,
            checkboxRacialQuestion: checked
                ? [...prev.checkboxRacialQuestion, value]
                : prev.checkboxRacialQuestion.filter((item) => item !== value),
        }));
    }

    const handleOptionChangeTransgender = (trans) => {
        setFormData((prev) => ({
            ...prev,
            transgender: trans,
        }));
    };

    const handleOptionChangeChronic = (chronic) => {
        console.log(1);
        
        setFormData((prev) => ({
            ...prev,
            chronicQuestion: chronic,
        }));
    };

    const handleOptionChangeSponsorship = (sponsorship) => {
        setFormData((prev) => ({
            ...prev,
            sponsorship: sponsorship,
        }));
    };

    const handleClearAll = (e) => {
        e.preventDefault();
        setFormData({
            gender: "",
            protecteVeteranStatus:"",
            checkboxEthnicityQuestion: [],
            checkboxRacialQuestion: [],
            transgender:"",
            chronicQuestion:"",
            sponsorship:"",
        });
                
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });
        for (let [key, value] of formDataToSend) {
            console.log(`${key} - ${value}`)
        }
        //saveMutation.mutate(formDataToSend);
    }

    const handleSave = (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            const value = Array.isArray(formData[key]) ? JSON.stringify(formData[key]) : formData[key];
            formDataToSend.append(key, value);
        });

        for (let [key, value] of formDataToSend) {
            console.log(`${key} - ${value}`)
        }

        //saveMutation.mutate(formDataToSend);
    }

    return(
        <section className="questions">
            <div className="questions__block">
                <QuestionsComponent 
                    title="How do you describe your gender identity?"
                    name="gender"
                    selected={formData.gender} 
                    handleOptionChange={handleOptionChangeGender}
                    radioButtons={genders}
                />
                <QuestionsComponent 
                    title="Protected Veteran Status"
                    name="protecteVeteranStatus"
                    selected={formData.protecteVeteranStatus} 
                    handleOptionChange={handleOptionChangeProtectedStatus}
                    radioButtons={ProtectedStatus}
                    column="column"
                    widthButtonsBlock="widthButtonsBlock"
                />

            </div>
            <EthnicityQuestion 
                title="How would you describe your racial/ethnic background? (mark all that apply)"
                name="checkboxEthnicityQuestion"
                selected={formData.checkboxEthnicityQuestion} 
                handleOptionChange={handleOptionChangeCheckboxEthnicity}
                checkboxButtons={ethnicityQuestion}
                widthButtonsBlock="widthButtonsBlockCheckbox"
            />
            <div  className="questions__block">
                <EthnicityQuestion 
                    title="How would you describe your racial/ethnic background? (mark all that apply)"
                    name="checkboxRacialQuestion"
                    selected={formData.checkboxRacialQuestion} 
                    handleOptionChange={handleOptionChangeCheckboxRacial}
                    checkboxButtons={RacialQuestion}
                    widthButtonsBlock="widthButtonsBlockCheckboxRacial"
                    widthContainer="widthContinerRacial"
                />
                <QuestionsComponent 
                    title="Do you identify as transgender?"
                    selected={formData.transgender} 
                    name="transgender"
                    handleOptionChange={handleOptionChangeTransgender}
                    radioButtons={transgenders}
                    column="column"
                    widthButtonsBlock="widthContiner"
                    widthContainer="widthContinerQuestions"
                />
            </div>
            <div  className="questions__block">
                <QuestionsComponent 
                    title="Do you have a disability or chronic condition (physical, visual, auditory, 
                    cognitive, mental, emotional, or other) that substantially limits one or more of your major 
                    life activities, including mobility, communication (seeing, hearing, speaking), and learning?"
                    name="chronicQuestion"
                    selected={formData.chronicQuestion} 
                    handleOptionChange={handleOptionChangeChronic}
                    radioButtons={ChronicQuestion}
                    widthButtonsBlock="widthButtonsBlockCheckboxRacial"
                    widthContainer="widthContinerRacial"
                />
                <QuestionsComponent 
                    title="Do you, or will you require sponsorship in the future?"
                    selected={formData.sponsorship} 
                    name="sponsorship"
                    handleOptionChange={handleOptionChangeSponsorship}
                    radioButtons={sponsorshipFuture}
                    column="column"
                    widthButtonsBlock="widthContiner"
                    widthContainer="widthContinerQuestions"
                />
            </div>
            <div className="questions__buttons">
                <ButtonComponent 
                    ClickFunction={handleClearAll}
                    classNameButton="questions__buttons__btn"
                    textButton="Clear All"
                    classNameText="questions__buttons__text"
                />
                <ButtonComponent 
                    ClickFunction={handleSave}
                    classNameButton="questions__buttons__btn"
                    textButton="Save"
                    classNameText="questions__buttons__text"
                />
            </div>
        </section>
    )
}