import axios from "axios";
import { useEffect, useState } from "react";
import {API, AppRouting} from '../../../const';
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import ResumeForm from "../ResumeForm/ResumeForm";
import { useLocation, useNavigate } from "react-router-dom";
import { ValidateFormResume } from "../../../utils/validate";
import StepStatus from "../../StepStatus/StepStatus";
import InputResume from "../InputResume/InputResume";
import { setCurrentStep, setDoneStep, setSteps } from "../../../store/stepSlice";

export default function ResumeDataGeneration({file, OldFileName, resume, active}){    
    const currentRoute = useLocation().pathname;
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        salary: "",
        experienceLevel: "Intership",
        site: "",
        linkedIn: "",
        gitHub: "",
        portFolioLink: "",
        jobprefor: [],
        radiobutton: "yes",
        work: 5,
    });
    const [additionalData, setAdditionalData] = useState({
        firstName: "",
        lastName: "",
        country: "",
        city: ""
    });
    const [errors, setErrors] = useState({});
    const token = useSelector(state => state.token.token);
    const navigate = useNavigate();

    const builderResume = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(API.RESUME_FROM, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });          
            return response  
        },
        onSuccess: (response) => {
            if (response.data === true) {
                navigate("/auto-apply");
            }
        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
    });

    useEffect(() => {
        if (resume) {
            const {name, salary, experienceLevel, jobprefor, work, radiobutton, site, gitHub,linkedIn, portFolioLink} = resume;
            
            setFormData((prev) => ({
                ...prev,
                name:name,
                salary:salary,
                experienceLevel:experienceLevel,
                jobprefor: jobprefor
                    ?[...prev.jobprefor, jobprefor]
                    :prev.jobprefor.filter(item => item !== jobprefor),
                work:work,
                radiobutton:radiobutton,
                site:site,
                gitHub:gitHub,
                linkedIn:linkedIn,
                portFolioLink:portFolioLink
            }));
        }
    }, [resume]);

    const handleFilterChange = (value) => {
        setFormData((prev) => {
            const jobprefor = Array.isArray(prev.jobprefor) ? prev.jobprefor : [];
            console.log(jobprefor);
            
            const isChecked = jobprefor.includes(value);
            return {
                ...prev,
                jobprefor: isChecked
                    ? jobprefor.filter((item) => item !== value)
                    : [...jobprefor, value]
            };
        });
    };

    const handleCounter = (newCount) => {
        setFormData((prevData) => ({
            ...prevData,
            work: newCount,
        }));
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleAdditionalDataChange =(field, value) => {
        setAdditionalData((prev) => ({...prev, [field]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const validationErrors = ValidateFormResume(formData.name, formData.salary, formData.jobprefor, formData.work, additionalData.firstName, additionalData.lastName, additionalData.city);
        const validationErrors = ValidateFormResume(formData.name, formData.salary, formData.jobprefor, formData.work, additionalData.firstName, additionalData.lastName, additionalData.city);
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        if(currentRoute === AppRouting.Onboard){
            Object.keys(additionalData).forEach((key) => {
                formDataToSend.append(key, additionalData[key]);
            });
        }
        if (file) formDataToSend.append("file", file);
        if(currentRoute === AppRouting.Onboard){
            dispatch(setSteps(true));
            dispatch(setDoneStep({ step: 'stepDone1', value: true }))
            dispatch(setCurrentStep({ step: 'currentStep2', value: true }));
            dispatch(setSteps({ step: 'step1', value: false }));
            dispatch(setSteps({ step: 'step2', value: true }));
        }
        for (let [key, value] of formDataToSend) {
            console.log(`${key} - ${value}`)
        }
        builderResume.mutate(formDataToSend);
    };

    return(
        <section className={`${active ? "data" : "modal"}`}>
            <div className={`${active ? "" : "modal__block"}`}>
                {currentRoute === AppRouting.Onboard && (
                    <>
                        <StepStatus width={"29%"} />
                        <InputResume fileName = {OldFileName}/>

                    </>
                )}
                <div className="modal__wrapper">
                    <h1 className="modal__wrapper__title">Confirm your resume information</h1>
                    <p className="modal__wrapper__description">We have auto-filled your information from your resume. 
                    Please check and update if anything is incorrect.</p>
                </div>
                <ResumeForm
                    formData={formData}
                    setAdditionalData={setAdditionalData}
                    handleAdditionalDataChange={handleAdditionalDataChange}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleFilterChange={handleFilterChange}
                    handleCounter={handleCounter}   
                    errors={errors}         
                    currentRoute={currentRoute} 
                />
            </div>
        </section>
    );
}