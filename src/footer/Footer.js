import React from "react";
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {FaGithub, FaLinkedin, FaTelegram, SiCodewars} from "react-icons/all";

const icons = [
    {icon: FaGithub, href: 'https://github.com/zillomoons'},
    {icon: FaLinkedin, href: 'https://www.linkedin.com/in/dolzhit-ts/'},
    {icon: FaTelegram, href: 'https://t.me/dolzhit_ts'},
    {icon: SiCodewars, href: 'https://www.codewars.com/users/zillowmoon'},
    ]
export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.logo}><a href="#top">Dolzh<span>it</span></a> </div>
                <div className={s.socialIcons}>
                    {
                        icons.map((icon, index) => <a key={index} href={icon.href} rel="noreferrer" target="_blank" >
                        {React.createElement(icon.icon, null, null)}
                        </a>)
                    }
                </div>
                <div className={s.copyright}><AiOutlineCopyrightCircle />2021 All rights reserved</div>
            </div>
        </div>
    )
}