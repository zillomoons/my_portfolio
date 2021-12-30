import React from "react";
import s from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css';
import {SectionHeading} from "../components/section-heading/SectionHeading";
import {FaReact, SiRedux, SiTypescript, SiJavascript, SiHtml5, FaServer,  VscDebugRestartFrame, SiMaterialui} from "react-icons/all";

const skills = [
    {id: 1, icon: FaReact, title: "React", description: 'Used React library for developing UI of SPA. Experienced in creating functional components with Hooks as well as class components. Used HOC to reuse component logic and optimize performance with React.memo.  '},
    {id: 2, icon: SiRedux, title: "Redux", description: "Implemented Redux for state management of app as BLL. Created reducers for immutable state modification, and used Thunk middleware for asynchronous network requests."},
    {id: 3, icon: SiTypescript, title: "TypeScript", description: 'Used TypeScript for developing easily scalable and sustainable application. '},
    {id: 4, icon: SiJavascript, title: "JavaScript", description: 'Experienced in using ES6 features, such as Promises, Classes, Destructuring assignment, Arrow functions etc.'},
    {id: 5, icon: FaServer, title: "Rest API", description: 'Developed data access layer (DAL) for interaction with RESTful web services by using Axios library.'},
    {id: 6, icon: VscDebugRestartFrame, title: "Unit tests", description: 'Implemented TDD by creating Unit tests for reducers and components with Jest.'},
    {id: 7, icon: SiHtml5,  title: "HTML & CSS", description: 'Created styles for UI components by using Styled Components and Sass preprocessor.'},
    {id: 8, icon: SiMaterialui,  title: "Material UI", description: 'Used Material UI for app development with styles and design out of a box.'},
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