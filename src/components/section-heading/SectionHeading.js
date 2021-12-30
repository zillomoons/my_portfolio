import s from "./SectionHeading.module.css";

export const SectionHeading = (props) =>{
    return(
        <div className={s.section_heading}>
            <h6>{props.smallHeading}</h6>
            <h1>{props.mainHeading}</h1>
        </div>
    )
}