import close from '../../assets/onboard/close.svg'
import StepStatus from '../StepStatus/StepStatus';
import UploadResume from '../UploadResume/UploadResume';

export default function ResumeModal({start, handleStart, setFileName, setFile, width}){
    return(
        <section className="modal">
            <div 
                className="modal__container"
                style={{width}}
            >
                <img 
                    className="modal__container__close" 
                    onClick={()=>handleStart(false)}
                    src={close} 
                    alt="close__icon"
                />
                <StepStatus />
                <UploadResume 
                    handleFileName={setFileName}
                    handleFile={setFile}
                    handleStart={handleStart}
                />
            </div>
        </section>
    )
}