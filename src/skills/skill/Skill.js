import React from "react";
import s from './Skill.module.css';
import {FaReact, SiRedux, SiTypescript, SiJavascript, SiHtml5 } from "react-icons/all";


export const Skill = (props)=> {
    return (
        <div className={s.skill}>
            <div className={s.imgContainer}>
                {React.createElement(props.icon, null, null)}
            </div>
            <h6>{props.title}</h6>
            <p>{props.description}</p>
        </div>
    )
}