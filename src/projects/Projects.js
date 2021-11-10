import React from "react";
import s from './Projects.module.css';
import stylesContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";

const projects = [
    {id: 1, title: 'Social Network', projectImage: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 2, title: 'TODO List', projectImage: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
    {id: 3, title: 'Counter', projectImage: '', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua. '},
]

export const Projects = () => {
    const mappedProjects = projects.map(p=><Project key={p.id}
                                                    title={p.title}
                                                    icon={p.icon}
                                                    description={p.description} />)
    return (
        <div className={s.projectsBlock}>
            <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    {mappedProjects}
                </div>
            </div>

        </div>
    )
}