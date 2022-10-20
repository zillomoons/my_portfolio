import React from "react";
import s from './Project.module.css';

export const Project = (props) => {
    return (
      <div className={s.project}>
        <div className={s.imgContainer} style={props.style}>
          <a href={props.href} rel='noreferrer' target='_blank'>
            Watch
          </a>
        </div>
        <div className={s.description}>
          <h5 className={s.title}>{props.title}</h5>
          <p>{props.description}</p>
          <p>
            <a
              href={props.code}
              target='_blank'
              rel='noreferrer'
            >
              Code
            </a>
          </p>
        </div>
      </div>
    );
}