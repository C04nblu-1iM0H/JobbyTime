import LinkComponent from "../LinkComponent/LinkComponent";
import { useLocation } from "react-router-dom";

export default function ListAiTools({tools}){
    const currentRoute = useLocation().pathname    
    return(
        <>
            {tools.map((tool, id) => (
                <LinkComponent
                    key={id}
                    root={tool.root}
                    path={tool.path}
                    fill={currentRoute === tool.root ? "hsla(89, 82%, 71%, 1)" : "hsla(0, 0%, 24%, 1)"}
                    description={tool.description}
                    activeItem={currentRoute === tool.root ? "aside__menu__list__item-active" : null}
                    activeDescription={currentRoute === tool.root ? "aside__menu__list__item__description-active" : null}
                />
            ))}
      </>
    );
}