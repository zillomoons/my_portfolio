import React from "react";
import s from './Project.module.css';

export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer} style={props.style}>
                <a href="">Watch</a>
            </div>
            <div className={s.description}>
                <h5 className={s.title}>{props.title}</h5>
                <p>{props.description}</p>
            </div>

        </div>
    )
}