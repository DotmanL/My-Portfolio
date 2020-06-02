import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
 

const animation = keyframes`${bounceIn}`;


export const Navbar = styled.div `
position: fixed;
top: 0;
left: 0;
z-index: 9999;
background: white;
opacity: 0.7;
width: 100vw;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;
height: 30px;
animation: 1s ${animation};

@media screen and (max-width: 800px) {
   
    width: 100vw;       
  }
`



export const NavLinks = styled.h3 `
color: black;
font-size: 20px;
padding: 10px 10px;
  cursor: pointer;
    
`
