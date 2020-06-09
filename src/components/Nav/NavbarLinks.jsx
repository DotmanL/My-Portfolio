import React from "react"
import styled from "styled-components"
import { ScrollTo } from "react-scroll-to";

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  cursor: pointer;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #f1faee;
    display: none;
  }
`

const NavItemMobile =styled(NavItem)`
display: none;
@media (max-width: 800px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: #f1faee;
    display: flex;
  }
`


const NavbarLinks = () => {
  return (
    <>
   <ScrollTo>
      {({ scroll }) => (
        <NavItem onClick={() => scroll({ y: 530 })}>About</NavItem>
          )}
        </ScrollTo>
        <NavItem href='https://dotdevblog.netlify.com'  target="_blank" rel="noopener noreferrer"> Blog </NavItem>
      
        <ScrollTo>
      {({ scroll }) => (
        <NavItem onClick={() => scroll({ y: 1130 })}>Skills</NavItem>
          )}
        </ScrollTo>

        <ScrollTo>
      {({ scroll }) => (
        <NavItem onClick={() => scroll({ y: 1640 })}>Projects</NavItem>
          )}
        </ScrollTo>


        <ScrollTo>
      {({ scroll }) => (
        <NavItem onClick={() => scroll({ y: 4130 })}>Contact</NavItem>
          )}
        </ScrollTo>   
     

        <ScrollTo>
{({ scroll }) => (
	<NavItemMobile onClick={() => scroll({ y: 640 })}>About</NavItemMobile>
		)}
	</ScrollTo>
	<NavItemMobile href='https://dotdevblog.netlify.com'  target="_blank" rel="noopener noreferrer"> Blog </NavItemMobile>

	<ScrollTo>
{({ scroll }) => (
	<NavItemMobile onClick={() => scroll({ y: 2210 })}>Skills</NavItemMobile>
		)}
	</ScrollTo>

	<ScrollTo>
{({ scroll }) => (
	<NavItemMobile onClick={() => scroll({ y: 3640 })}>Projects</NavItemMobile>
		)}
	</ScrollTo>


	<ScrollTo>
{({ scroll }) => (
	<NavItemMobile onClick={() => scroll({ y: 7530 })}>Contact</NavItemMobile>
		)}
	</ScrollTo>   

    </>
  )
}

export default NavbarLinks