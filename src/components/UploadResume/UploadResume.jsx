import React, { useState } from 'react';
import download from '../../assets/resume/file.svg';
import './upload_resume.scss';
import { useDispatch } from 'react-redux';
import { setLoading, setSteps } from '../../store/stepSlice';
import { useLocation } from 'react-router-dom';
import { AppRouting } from '../../const';

export default function UploadResume({handleFileName, handleFile, handleStart}){
        const [isDragging, setIsDragging] = useState(false);
        const dispatch = useDispatch();
        const currentRoute = useLocation().pathname

        const handleDragOver = (e) => {
            e.preventDefault();
            setIsDragging(true);
        };
    
        const handleDragLeave = () => {
            setIsDragging(false);
        };
    
        const handleDrop = (e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFileUpload(e.dataTransfer.files[0]);
        };
    
        const handleFileChange = (e) => {
            handleFileUpload(e.target.files[0]);
        };
    
        const handleFileUpload = (file) => {
            if (file && file.type === 'application/pdf') {
                currentRoute === AppRouting.Onboard ? handleStart(false) : null;
                dispatch(setLoading(true));
                setTimeout(() => {
                    handleFileName(file.name);
                    handleFile(file);
                    dispatch(setLoading(false));
                    currentRoute === AppRouting.Onboard ? dispatch(setSteps({ step: 'step1', value: true })) : null;
                }, 500);
            } else {
                console.error("Please upload a valid PDF file.");
            }
        };
    return(
        <>
            <h2 className="subtitle">Upload you resume</h2>
            <div 
                className={`download ${isDragging ? 'dragging': ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <img src={download} alt="downloadIcon"/>
                <p className="download__action">
                    <label htmlFor="fileInput" className="download__action__btn">Click to upload</label>
                        or drag and drop
                </p>
                <input
                    id="fileInput"
                    type="file"
                    accept=".pdf"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <p className='download__description'>format .pdf</p>
            </div>
        </>
    )
}