import axios from "axios";
import { useEffect, useState } from "react";
import {API} from '../../const';
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { ValidateFormResumeModal } from "../../utils/validate";
import StepStatus from "../StepStatus/StepStatus";
import { setDoneStep, setStateOnboard, setSteps } from "../../store/stepSlice";
import ModalResumeForm from "../ModalResumeForm/ModalResumeForm";

export default function ModalCollectingResumeData({file, resume, active}){    
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        salary: "",
        location:"",
        experienceLevel: "Intership",
        jobprefor: [],
        radiobutton: "yes",
        work: 5,
    });
    const [errors, setErrors] = useState({});
    const token = useSelector(state => state.token.token);

    const updateState = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(API.UPDATE_STEPS, formData, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });          
            return response.data  
        },
        onSuccess: (response) => {
            console.log(response);
            dispatch(setStateOnboard(response.state_onbording));
        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
    })

    const builderResume = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post(API.RESUME_FROM, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });          
            return response.data  
        },
        onSuccess: (response) => {
            if (response === true) {

                updateState.mutate({ update_step: "step2" });

                dispatch(setDoneStep({ step: 'stepDone1', value: true }))
                dispatch(setSteps({ step: 'step1', value: false }));
                dispatch(setSteps({ step: 'step2', value: true }));
            }
            
        },
        onError: (error) => {
            console.error('Error sending data:', error);

        },
        onSettled: () => {
            setIsLoading(false);
        }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = ValidateFormResumeModal(formData.name,  formData.salary, formData.location, formData.jobprefor, formData.work);
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        if (file) formDataToSend.append("file", file);

        for (let [key, value] of formDataToSend) {
            console.log(`${key} - ${value}`)
        }
        setIsLoading(true);
        builderResume.mutate(formDataToSend);
    };    

    return(
        <section className={`${active ? "data" : "modal"}`}>
            <div className={`${active ? "" : "modal__block modal__block-onboard"}`}>
                <StepStatus width={"20%"} />
                <div className="modal__wrapper">
                    <h1 className="modal__wrapper__title">Confirm your job preferences</h1>
                    <p className="modal__wrapper__description">We have auto-filled your information from your resume. 
                    Please check and update if anything is incorrect.</p>
                </div>
                <ModalResumeForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleFilterChange={handleFilterChange}
                    handleCounter={handleCounter}   
                    errors={errors}        
                    isLoading={isLoading} 
                />
            </div>
        </section>
    );
}