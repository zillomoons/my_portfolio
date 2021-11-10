import React from "react";
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import icon from "../common/assets/js2.png";

const skills = [
    {id: 1, icon: icon, title: "JS", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    {id: 2, icon: icon, title: "HTML & CSS", description: 'Lorem ipsum dolor sit amet. '},
    {id: 3, icon: icon, title: "React", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
]

export const Skills = () =>{
    const mappedSkills = skills.map(s => <Skill key={s.id}
                                                icon={s.icon}
                                                title={s.title}
                                                description={s.description}/>)
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    )
}