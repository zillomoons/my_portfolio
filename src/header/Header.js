import React, {useState} from 'react';
import s from './Header.module.css';
import {Navbar} from "../navbar/Navbar";
import {GiHamburgerMenu} from "react-icons/all";

export const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    // should use styled components because css module mess with added classes
    return (
        <div className={s.header}>
            <div className={s.logo}><a href="#top">Dolzhi<span>t</span></a> </div>
            <span className={s.burgerMenu} onClick={showSidebar}><GiHamburgerMenu /></span>
            <Navbar sidebar={sidebar}/>
        </div>
    )
}