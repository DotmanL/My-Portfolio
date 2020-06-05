import styled from 'styled-components';
//import { bounceIn } from 'react-animations';
import jakspot from './jakspot.jpg'
import {Navicon} from'@styled-icons/evil/Navicon'
// const animation = keyframes`${bounceIn}`;




export const NavC = styled.div`
 background-image: url(${jakspot}); 
width: 100vw;
position: fixed;
display: flex;
flex-direction: row;
justify-content: flex-end;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 500px) {
   width: 100vw;
  
  }
`

export const Navm =styled.div`
display: none;
@media screen and (max-width: 800px) {

height: auto;
display: flex;
flex-direction: column;
align-items: flex-end;



  
  }

`

export const NavI = styled(Navicon)`
width: 50px;
height: 50px;
color: orange;
margin-left: 80vw;

`

export const NavLinks = styled.h3 `
color: white;
display: flex;
font-size: 20px;
padding: 0px 20px;
height: 3vh;
margin-right: 20px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
  
  display: none;
 }
`


export const NavmLinks = styled.h3 `

display: none;

  cursor: pointer;
  @media screen and (max-width: 800px) {
  padding: 5px 5px; 
  display: flex;
  color: orange;
  margin-top: -5px;
 }
`