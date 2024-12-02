import { useLocation } from "react-router-dom";
import LinkComponent from "../LinkComponent/LinkComponent";

export default function ListJobs({jobs}){
    const currentRoute = useLocation().pathname;
    return(
        <>
            {jobs.map((job, id) => (
                <LinkComponent
                    key={id}
                    root={job.root}
                    path={job.path}
                    fill={currentRoute === job.root ? "hsla(89, 82%, 71%, 1)" : "hsla(0, 0%, 24%, 1)"}
                    description={job.description}
                    activeItem={currentRoute === job.root ? "aside__menu__list__item-active" : null}
                    activeDescription={currentRoute === job.root ? "aside__menu__list__item__description-active" : null}
                />
            ))}
      </>
    );
}