import styled from 'styled-components';
//import { bounceIn } from 'react-animations';
import jakspot from './jakspot.jpg'

// const animation = keyframes`${bounceIn}`;


export const Navbar = styled.div `
background-image: url(${jakspot});
position: fixed;
top: 0;
left: 0;
z-index: 9999;
opacity: 0.9;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
height: 30px;

@media screen and (max-width: 800px) {
   
    width: 100%;       
  }
`



export const NavLinks = styled.h3 `
color: white;
font-size: 20px;
padding: 10px 15px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
  padding: 10px 5px;     
 }
    
`