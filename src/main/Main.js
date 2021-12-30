import React from "react";
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div id='main' className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.intro}>
                    <h6>Hello, I'm</h6>
                    <h1>Dolzhit</h1>
                    <h2>frontend developer</h2>
                    <p>Hello! I'm Dolzhit. Frontend developer from Moscow, Russia. I'm experienced in UI development using React / Redux /TypeScript.</p>
                    <a href="" className={s.simpleBtn}>Download CV</a>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}