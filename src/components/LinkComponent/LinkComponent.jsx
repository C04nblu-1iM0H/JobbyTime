import { Link } from "react-router-dom";
import SVGComponent from "../svgComponent/svgComponent";


export default function LinkComponent({path, fill, root, description, activeItem=undefined, activeDescription=undefined }){
    return(
        <Link className={`aside__menu__list__item ${activeItem}`} to={root}>
            <SVGComponent path={path} fill={fill}/>     
            <p 
                className={`aside__menu__list__item__description ${activeDescription}`}
            >
                {description}
            </p>
        </Link>
    )
}