import ResumeCard from "../resumeCard/resumeCard";

export default function ListResumeBuilder({listResume}){
    return(
        <section className="resume__list">
            <ResumeCard listResume={listResume}/>
        </section>
    )
}