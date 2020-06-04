import styled, { keyframes } from 'styled-components';

import {Github} from '@styled-icons/boxicons-logos/Github';
import {Twitter} from '@styled-icons/entypo-social/Twitter';

import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';
import {GoogleDrive} from '@styled-icons/fa-brands/GoogleDrive';
import jakspot from './jakspot.jpg'



import {wobble, } from 'react-animations';
 

const bounceAnimation = keyframes`${wobble}`;




export const IntroContainer = styled.div `
background-image: url(${jakspot});
height: 100vh;
width: 100%;

justify-content: center;
background-size: cover;
background-position: center; 
background-repeat: no-repeat;
align-items: center;
display: flex;
flex-direction: column;
position: relative;
@media screen and (max-width: 800px) {
        height: 100vh; 
        width: 100%;
        background-size: cover;
        background-position: center;
           
}
        
`




export const Icons = styled.div`
justify-content: space-evenly;
align-items: center;
display: flex;
flex-direction: row;
margin-top: 150px;
width: 300px;
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
  &:hover{
  color: orange;
}
`
export const Twit = styled(Twitter)`
  color: white;
  width: 50px;
  animation: 5s ${bounceAnimation};
  &:hover{
  color: orange;
}
`

export const Linked = styled(LinkedinSquare)`
  color: white;
  width: 50px;
  animation: 5s ${bounceAnimation};
  &:hover{
  color: orange;
}
`

export const Google = styled(GoogleDrive)`
  color: white;
  width: 50px;
  animation: 5s ${bounceAnimation};
  &:hover{
  color: orange;
}
`





export const Title =styled.h4 `
font-size: 20px;
color:white;
justify-content: center;
margin-top: 80px;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
@media screen and (max-width: 800px) {
      font-size: 11px;
      margin-left: 25px;
     
    
  }
`
export const Introt = styled.div`
    font-size: 8vw;
    color: white;
    margin-top: -90px;
 
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    @media screen and (max-width: 800px) {
     font-size: 6vw;
     
    
  }
`;


export const Introm = styled.div`
    font-size: 5vw;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    @media screen and (max-width: 800px) {
     font-size: 6vw;
     
    
  }
`;