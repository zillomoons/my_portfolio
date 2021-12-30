import React from "react";
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {SectionHeading} from "../components/section-heading/SectionHeading";
import {FaReact, SiRedux, SiTypescript, SiJavascript, SiHtml5, FaServer,  VscDebugRestartFrame, SiMaterialui} from "react-icons/all";

const skills = [
    {id: 1, icon: FaReact, title: "React", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 2, icon: SiRedux, title: "Redux", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 3, icon: SiTypescript, title: "TypeScript", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 4, icon: SiJavascript, title: "JavaScript", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    {id: 5, icon: FaServer, title: "Rest API", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    {id: 6, icon: VscDebugRestartFrame, title: "Unit tests", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    {id: 7, icon: SiHtml5,  title: "HTML & CSS", description: 'Lorem ipsum dolor sit amet. '},
    {id: 8, icon: SiMaterialui,  title: "Material UI", description: 'Lorem ipsum dolor sit amet. '},
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

const Skill = (props)=> {
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