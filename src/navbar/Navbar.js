import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <a href="#main">Main</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    )
}