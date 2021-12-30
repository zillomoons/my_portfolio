import React from "react";
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {FaGithub, FaLinkedin, FaTelegram, SiCodewars} from "react-icons/all";

const icons = [
    {icon: FaGithub, href: ''},
    {icon: FaLinkedin, href: ''},
    {icon: FaTelegram, href: ''},
    {icon: SiCodewars, href: ''},
    ]
export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <div className={s.logo}><a href="#top">Dolzhi<span>t</span></a> </div>
                <div className={s.socialIcons}>
                    {icons.map((icon, index) => <a key={index} href={icon.href}>
                        {React.createElement(icon.icon, null, null)}
                    </a>)}
                    {/*<a href=""><FaGithub /></a>*/}
                    {/*<a href=""><FaLinkedin /></a>*/}
                    {/*<a href=""><SiCodewars /></a>*/}
                    {/*<a href=""><FaTelegram /></a>*/}
                </div>
                <div className={s.copyright}><AiOutlineCopyrightCircle />2021 All rights reserved</div>
            </div>
        </div>
    )
}