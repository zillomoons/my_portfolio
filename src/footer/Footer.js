import React from "react";
import s from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {MediaIcon} from "./mediaIcon/MediaIcon";
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h2>Dolzhit</h2>
                <div className={s.iconsContainer}>
                    <MediaIcon />
                    <MediaIcon />
                    <MediaIcon />
                    <MediaIcon />
                </div>
                <div className={s.copyright}><AiOutlineCopyrightCircle />2021 All rights reserved</div>
            </div>
        </div>
    )
}