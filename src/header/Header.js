import React, {useEffect, useState} from 'react';
import {GiHamburgerMenu} from "react-icons/all";
import { Link } from 'react-scroll';
import {AccentSpan, Bars, Nav, NavbarContainer, NavbarLink, NavLogo, NavMenu} from "./navbarElements";

export const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const toggleHeader = () => {
        window.scrollY >= 80
            ? setScrollNav(true)
            : setScrollNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleHeader)
    }, [])

    // should use styled components because css module mess with added classes
    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo href="#top">Dolzh<AccentSpan>it</AccentSpan></NavLogo>
                <Bars onClick={showSidebar}><GiHamburgerMenu /></Bars>
                <NavMenu className={sidebar ? 'active' : ''}>
                    {NavbarLinks.map((item, i) => {
                        return <NavbarLink
                            key={i}
                            activeClass='active'
                            href={item.href}
                            onClick={showSidebar}
                            to={item.href}
                            smooth={true}
                            duration={500}
                            offset={0}
                            spy={true}
                        >
                            {item.title}
                        </NavbarLink>
                    })}
                </NavMenu>
            </NavbarContainer>

        </Nav>
    )
};

const NavbarLinks = [
    {title: 'Main', href: 'main'},
    {title: 'Skills', href: 'skills'},
    {title: 'Projects', href: 'projects'},
    {title: 'Contacts', href: 'contacts'},
]