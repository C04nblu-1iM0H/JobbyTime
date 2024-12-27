import document from '../../../assets/onboard/document.svg'
import './input_resume.scss';

export default function InputResume({fileName}){
    return(
        <div className="resume-file">
            <label htmlFor="fileInput" className="resume-file__button">Choose file</label>
            <input 
                id="fileInput" 
                className="resume-file__input" 
                type="file" 
            />

            <div className="resume-file__data">
                <img src={document} alt="resum_icon" />
                <span className="resume-file__data__text">{fileName}</span>
            </div>
            
        </div>
    )
}