import React, {Fragment} from 'react';
import {NavLinks, NavmLinks, NavI, Navm, NavC} from './Nav.styles'
import { ScrollTo } from "react-scroll-to";
import ResponsiveMenu from 'react-responsive-navbar';
const Nav = () => {


return(
<Fragment>
<NavC>
<ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 430 })}>About</NavLinks>
          )}
        </ScrollTo>
      
        <ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 1020 })}>Skills</NavLinks>
          )}
        </ScrollTo>

        <ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 1530 })}>Projects</NavLinks>
          )}
        </ScrollTo>


        <ScrollTo>
      {({ scroll }) => (
        <NavLinks onClick={() => scroll({ y: 4230 })}>Contact</NavLinks>
          )}
        </ScrollTo>   
       

      
<ResponsiveMenu
        menuOpenButton={<NavI />}
        menuCloseButton={<NavI />}
        changeMenuOn="800px"
        menu={
          <Navm>
             <ScrollTo>
      {({ scroll }) => (
        <NavmLinks onClick={() => scroll({ y: 430 })}>About</NavmLinks>
          )}
        </ScrollTo>
      
        <ScrollTo>
      {({ scroll }) => (
        <NavmLinks onClick={() => scroll({ y: 1020 })}>Skills</NavmLinks>
          )}
        </ScrollTo>

        <ScrollTo>
      {({ scroll }) => (
        <NavmLinks onClick={() => scroll({ y: 1530 })}>Projects</NavmLinks>
          )}
        </ScrollTo>


        <ScrollTo>
      {({ scroll }) => (
        <NavmLinks onClick={() => scroll({ y: 4230 })}>Contact</NavmLinks>
          )}
        </ScrollTo>
           
          </Navm>
        
        }
      />
  
  </NavC>
 
      </Fragment>
  )

}

export default Nav;