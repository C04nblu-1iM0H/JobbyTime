import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ResumeDataGeneration from '../form/ResumeDataGeneration/ResumeDataGeneration';
import UploadResume from '../UploadResume/UploadResume';

export default function DownloadArea(){
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState("");
    const [file, setFile]=useState("");

    return(
        <div>
            <div className="resume__container"> 
                <UploadResume 
                    handleLoading={setIsLoading}
                    handleFileName={setFileName}
                    handleFile={setFile}
                />
            </div>
            {isLoading && ReactDOM.createPortal(
                <div className="loader">
                    <div className="loader__modal">
                        <div className="loader__modal__spinner"></div>
                        <p className="loader__modal__description">Uploading...</p>
                    </div>
                </div>,
                document.body
            )}
            {fileName.length !== 0 && ReactDOM.createPortal(
                <ResumeDataGeneration file={file} OldFileName={fileName}/>,
                document.body
            )}
        </div>
    );
}