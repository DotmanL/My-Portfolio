import React from 'react';
import {Navbar, NavLinks} from './Nav.styles'
import { ScrollTo } from "react-scroll-to";

const Nav = () => {


return(
      <Navbar>
  
      <ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 430 })}>About</NavLinks>
          )}
        </ScrollTo>
      
        <ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 930 })}>Skills</NavLinks>
          )}
        </ScrollTo>

        <ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 1330 })}>Projects</NavLinks>
          )}
        </ScrollTo>


        <ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 4230 })}>Contact</NavLinks>
          )}
        </ScrollTo>
        
      </Navbar>
  )

}

export default Nav;