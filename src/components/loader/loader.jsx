import ReactDOM from 'react-dom';
import './loader.scss';

export default function Loader(){
    return(
        ReactDOM.createPortal(
            <div className="loader">
                <div className="loader__modal">
                    <div className="loader__modal__spinner"></div>
                    <p className="loader__modal__description">Uploading...</p>
                </div>
            </div>,
            document.body
        )
    )
}