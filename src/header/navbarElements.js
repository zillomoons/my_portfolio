import styled from "styled-components";
import { Link } from "react-scroll";


export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 90%;
`

export const NavLogo = styled.a`
  font-weight: 700;
  font-size: 21px;
  letter-spacing: 1.5px;
  color: rgb(33, 37, 41);
  font-family: 'Montserrat Alternates', sans-serif;
  color: var(--heading-text-color);

  &:hover {
    color: rgb(33, 37, 41);
  }
`
export const AccentSpan = styled.span`
  color: var(--accent-text-color);
`

export const Bars = styled.span`
  align-self: center;
  color: var(--heading-text-color);
  font-size: 30px;
  height: 30px;
  margin-top: -10px;

  &:hover {
    color: var(--accent-text-color);
  }

  @media (min-width: 992px) {
    display: none;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    background: var(--heading-text-color);
    position: fixed;
    z-index: 500;
    width: 100%;
    height: 50%;
    top: 60px;
    right: -100%;
    transition: 850ms;
    padding-top: 50px;

    &.active {
      right: 0;
      transition: 350ms;
      margin: 0 auto;

    }
  }
`

export const NavbarLink = styled(Link)`
  color: var(--heading-text-color);
  padding: 13px 7px;
  margin: 10px 15px;
  font-size: 13px;
  font-weight: 500;
  display: block;

  &.active {
    color: var(--accent-text-color);
  }

  @media screen and (max-width: 992px) {
    color: white;
  }
`