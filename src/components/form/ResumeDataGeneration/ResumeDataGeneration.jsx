import axios from "axios";
import { useEffect, useState } from "react";
import {API} from '../../../const';
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import ResumeForm from "../ResumeForm/ResumeForm";
import { useNavigate } from "react-router-dom";
import { ValidateFormResume } from "../../../utils/validate";

export default function ResumeDataGeneration({file, resume, active, setIsResumeData}){    
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
                setIsResumeData(false)
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
        const validationErrors = ValidateFormResume(formData.name, formData.salary, formData.jobprefor, formData.work);
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            if (key === "jobprefor" && Array.isArray(formData.jobprefor)) {
                formData.jobprefor.forEach((value) => {
                    formDataToSend.append("jobprefor", value);
                });
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        if (file) formDataToSend.append("file", file);

        for (let [key, value] of formDataToSend) {
            console.log(`${key} - ${value}`)
        }
        builderResume.mutate(formDataToSend);
    };

    return(
        <section className={`${active ? "data" : "modal"}`}>
            <div className={`${active ? "" : "modal__block"}`}>
                <div className="modal__wrapper">
                    <h1 className="modal__wrapper__title">Confirm your job preferences</h1>
                    <p className="modal__wrapper__description">We have auto-filled your information from your resume. 
                    Please check and update if anything is incorrect.</p>
                </div>
                <ResumeForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleFilterChange={handleFilterChange}
                    handleCounter={handleCounter}   
                    errors={errors}         
                />
            </div>
        </section>
    );
}