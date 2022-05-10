import React from "react";
import s from './Projects.module.css';
import stylesContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {SectionHeading} from "../components/section-heading/SectionHeading";
import socNet from '../assets/soc_network.jpg';
import todoImg from '../assets/todo.png';
import counter from '../assets/counter.png';

const projects = [
    {id: 1, bgImage: { backgroundImage: 'url(' + socNet + ')' }, title: 'Social Network', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 2, bgImage: {backgroundImage: 'url(' + todoImg + ')'}, title: 'TODO List', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.consectetur adipiscing elit, magna aliqua '},
    {id: 3, bgImage: {backgroundImage: 'url(' + counter + ')'}, title: 'Counter', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
]


export const Projects = () => {

    const mappedProjects = projects.map(p=><Project key={p.id}
                                                    style={p.bgImage}
                                                    title={p.title}
                                                    icon={p.icon}
                                                    description={p.description} />)
    return (
        <div id='projects' className={s.projectsBlock}>
            <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
                <SectionHeading smallHeading='portfolio' mainHeading='my projects.' />
                <div className={s.projects}>
                    {mappedProjects}
                </div>
            </div>

        </div>
    )
}