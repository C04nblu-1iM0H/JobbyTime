import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import ResumeDataGeneration from '../form/ResumeDataGeneration/ResumeDataGeneration';

export default function DownloadArea({icon}){
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState("");
    const [file, setFile]=useState("");

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
            setIsLoading(true);
            setTimeout(() => {
                setFileName(file.name);
                setFile(file)
                setIsLoading(false);
            }, 500);
        } else {
            toast.error("Please upload a valid PDF file.")
        }
    };

    return(
        <div className="resume__container">
            <h2 className="resume__container__subtitle">Upload you resume</h2>
            <div 
                className={`resume__container__download ${isDragging ? 'dragging': ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {isLoading && ReactDOM.createPortal(
                    <div className="loader">
                        <div className="loader__modal">
                            <div className="loader__modal__spinner"></div>
                            <p className="loader__modal__description">Uploading...</p>
                        </div>
                    </div>,
                    document.body
                )}
                <img src={icon} alt="downloadIcon"/>
                <p className="resume__container__download__action">
                    <label htmlFor="fileInput" className="resume__container__download__action__btn">Click to upload</label>
                        or drag and drop
                </p>
                <input
                    id="fileInput"
                    type="file"
                    accept=".pdf"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <p className='resume__container__download__description'>format .pdf</p>
                <Toaster 
                    position="top-right"
                    reverseOrder={true}
                />
                {fileName.length !== 0 && ReactDOM.createPortal(
                    <ResumeDataGeneration file={file} OldFileName={fileName}/>,
                    document.body
                )}
            </div>
        </div>
    );
}