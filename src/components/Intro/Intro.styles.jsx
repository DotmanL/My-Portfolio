import styled, { keyframes } from 'styled-components';

import {Github} from '@styled-icons/boxicons-logos/Github';
import {Twitter} from '@styled-icons/entypo-social/Twitter';

import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {GoogleDrive} from '@styled-icons/fa-brands/GoogleDrive';


import dot from './dot.png';

import {wobble, zoomIn} from 'react-animations';
 

const bounceAnimation = keyframes`${wobble}`;

const flipAnimation = keyframes`${zoomIn}`;


export const IntroContainer = styled.div `

height: 500px;
background: black;
justify-content: center;
align-items: center;
display: flex;
flex-direction: row;
@media screen and (max-width: 800px) {
        height: 500px; 
        
        
  }
`


export const Image = styled.div`
background-image:url(${dot});
background-size: cover;
  background-repeat: no-repeat;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  width: 200px;
  height: 250px;
  margin-top: -135px;
  animation: 5s ${flipAnimation};
  @media screen and (max-width: 800px) {
      margin-top: -150px;
      position: absolute;
    
  }
 
` 


export const Icons = styled.div`

justify-content: center;
align-items: center;
display: flex;
flex-direction: row;
margin-top: 100px;
position: absolute;
@media screen and (max-width: 800px) {
      margin-top: 170px;
      position: absolute;
    
  }
`


export const Git = styled(Github)`
  color: white;
  width: 50px;
  animation: 5s ${bounceAnimation};
 
`
export const Twit = styled(Twitter)`
  color: white;
  width: 50px;
  animation: 5s ${bounceAnimation};
`

export const Linked = styled(LinkedinSquare)`
  color: white;
  width: 50px;
  animation: 5s ${bounceAnimation};
`

export const Google = styled(GoogleDrive)`
  color: white;
  width: 50px;
  animation: 5s ${bounceAnimation};
`





export const Title =styled.h4 `
font-size: 20px;
color:white;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
@media screen and (max-width: 800px) {
      font-size: 11px;
      margin-left: 25px;
     
    
  }
`
export const ReactTyping = styled.div`
    font-size: 25px;
    color: white;
    margin-top: 75px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    @media screen and (max-width: 800px) {
      margin-top: 150px;
     
    
  }
`;