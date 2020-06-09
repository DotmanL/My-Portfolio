import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import jakspot from './jakspot.jpg'
//import Logo from "./Logo"

const Navigation = styled.nav`
  height: 9vh;
  display: flex;
  background-image: url(${jakspot});
  position: fixed;
  top: 0;
    left: 0;
    right: 0;
    left: 0;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 1px solid orange;
  margin: 0 auto;
  padding: 0 5vw;
  margin-bottom: -5px;
  z-index: 2;
  align-self: center;
  @media (max-width: 800px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 800px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  background-image: url(${jakspot});
  color: #f1faee;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    position: fixed;
    width: 50%;
    opacity: 0.8;
    justify-content: flex-start;
    padding-top: 10vh;
    transition: all 0.3s ease-in;
    top: 8vh;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #f1faee;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color:#f1faee;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      {/* <Logo /> */}
      <h4 style={{'color': 'white'}}>DOTMANL</h4>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Nav