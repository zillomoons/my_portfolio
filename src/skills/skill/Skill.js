import React from "react";
import s from './Skill.module.css';

export const Skill = (props)=> {
    return (
        <div className={s.skill}>
            <div className={s.imgContainer}>
                <img src={props.icon} alt="skillIcon"/>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}