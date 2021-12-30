import React from "react";
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {SectionHeading} from "../components/section-heading/SectionHeading";
import {FaReact, SiRedux, SiTypescript, SiJavascript, SiHtml5 } from "react-icons/all";

const skills = [
    {id: 3, icon: FaReact, title: "React", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 4, icon: SiRedux, title: "Redux", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 5, icon: SiTypescript, title: "TypeScript", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 1, icon: SiJavascript, title: "JavaScript", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    {id: 2, icon: SiHtml5,  title: "HTML & CSS", description: 'Lorem ipsum dolor sit amet. '},
]

export const Skills = () =>{
    const mappedSkills = skills.map(s => <Skill key={s.id}
                                                icon={s.icon}
                                                title={s.title}
                                                description={s.description}/>)
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <SectionHeading smallHeading='technologies' mainHeading='my skills.' />
                <div className={s.skills}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    )
}