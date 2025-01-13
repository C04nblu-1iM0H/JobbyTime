import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ResumeDataGeneration from '../form/ResumeDataGeneration/ResumeDataGeneration';
import UploadResume from '../UploadResume/UploadResume';
import { useSelector } from 'react-redux';
import UserInfoForm from '../form/UserInfoForm/UserInfoForm';
import UserStartDataModal from '../UserStartDataModal/UserStartDataModal';
import UserFormModal from '../UserFormModal/UserFormModal';

export default function DownloadArea(){
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState("");
    const [file, setFile]=useState("");
    const [isUserData, setIsUserData] = useState(false);
    const [isResumeData, setIsResumeData] = useState(false);
    const userData = useSelector((state) => state.user.userData);
    const {phoneNumber, countryCode, birthday, state, city} = userData;
    return(
        <div>
            <div className="resume__container"> 
                <UploadResume 
                    handleLoading={setIsLoading}
                    handleFileName={setFileName}
                    handleFile={setFile}
                    setIsUserData={setIsUserData}
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
            { fileName.length !== 0 && isUserData && ReactDOM.createPortal(
                <UserFormModal setIsUserData={setIsUserData} setIsResumeData={setIsResumeData}/>,
                document.body
            )}
            {isResumeData && fileName.length !== 0 && ReactDOM.createPortal(
                <ResumeDataGeneration file={file} OldFileName={fileName} setIsResumeData={setIsResumeData}/>,
                document.body
            )}
        </div>
    );
}