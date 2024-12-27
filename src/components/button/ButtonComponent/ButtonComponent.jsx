export default function ButtonComponent({
    typeButton,
    ClickFunction, 
    classNameButton, 
    textButton, 
    classNameText, 
    src, 
    classNameIcon, 
    alt
}){
    return(
        <button
            type={typeButton}
            onClick={ClickFunction}
            className={classNameButton}
        >
            <p className={classNameText}>{textButton}</p>
            { src && (<img className={classNameIcon} src={src} alt={alt} />)}
        </button>
    )
}