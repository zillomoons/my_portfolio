import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({scrollNav}) => (scrollNav ? '#fff' : 'transparent')};
  height: 80px;
  margin-top: -80px;
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

  &:hover {
    color: rgb(33, 37, 41);
  }
`
export const AccentSpan = styled.span`
  color: #47bb8e;
`

export const Bars = styled.span`
  align-self: center;
  color: #212529;
  font-size: 30px;
  height: 30px;

  &:hover {
    color: #47bb8e;
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
    background: #212529;
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

export const NavbarLink = styled.a`
  color: #212529;
  padding: 13px 7px;
  margin: 10px 15px;
  font-size: 13px;
  font-weight: 500;
  display: block;

  @media screen and (max-width: 992px) {
    color: white;
  }
`