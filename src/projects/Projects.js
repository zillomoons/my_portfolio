import React from "react";
import s from './Projects.module.css';
import stylesContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {SectionHeading} from "../components/section-heading/SectionHeading";
import socNet from '../assets/soc_network.jpg';
import todoImg from '../assets/todo.png';
import chatApp from '../assets/chat_app.png';

const projects = [
  {
    id: 1,
    bgImage: { backgroundImage: 'url(' + socNet + ')' },
    title: 'Social Network',
    href: 'https://github.com/zillomoons/social_network_ts',
    code: 'https://github.com/zillomoons/social_network_ts',
    description:
      'SPA created with React JS library, Redux for state management, TypeScript for scalability, Material UI for beauty.',
  },
  {
    id: 2,
    bgImage: { backgroundImage: 'url(' + todoImg + ')' },
    title: 'TODO List',
    href: 'https://disk.yandex.ru/i/B4gwCBWpO2Hhwg',
    code: 'https://github.com/zillomoons/todolist-ts_styled_components',
    description:
      'Application build with ReactJS/Redux/TypeScript and styled components library.',
  },
  {
    id: 3,
    bgImage: { backgroundImage: 'url(' + chatApp + ')' },
    title: 'Chat App',
    href: 'https://disk.yandex.ru/i/IlD-RvwE-KqBZg',
    code: 'https://github.com/zillomoons/chat_app_ts',
    description:
      'Application build with ReactJS/TypeScript and NodeJS for backend.',
  },
];



export const Projects = () => {

    const mappedProjects = projects.map(p => <Project
        key={p.id}
        href={p.href}
        style={p.bgImage}
        title={p.title}
        icon={p.icon}
        code={p.code}
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
};