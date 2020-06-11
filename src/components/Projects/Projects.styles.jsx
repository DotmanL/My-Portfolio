import styled, {keyframes} from 'styled-components'
import smart from './images/smart22.png'
import covid from './images/covid22.png'
import robo from './images/robo22.png'
import dotdev from './images/dotdev22.png'
import allr from './images/allrange.png'
import devmeet from './images/devmeet22.png'

import {Github} from '@styled-icons/boxicons-logos/Github';
import {LinkExternal} from '@styled-icons/boxicons-regular/LinkExternal'
import {wobble, } from 'react-animations';
 

const bounceAnimation = keyframes`${wobble}`;


export const Container= styled.div`
height: auto;
width: 100%;
background: #17141d;
display: flex;
border-bottom: 0px solid orange;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px 20px;
@media screen and (max-width: 800px) {
    display: flex;  
    width: 100vw;       
  }
`

export const Header= styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 800px) {
 align-items: center;
 margin-left: 0px;
  }
`


export const Title =styled.h1 `
font-size: 25px;
color: white;
margin-top: 15px;
font-style: italic;
padding: 5px 15px;
font-family: 'Piedra', cursive;
`

export const CardContent= styled.div`

width: 100%;
height: auto;
margin-top: -70px;
display: flex;
flex-direction: row;
flex-flow: row wrap;
justify-content: center;
margin-bottom: 50px;

@media screen and (max-width: 800px) {
    display: flex;
    margin-top: -80px;
    width: 95vw;
    margin-left: 2.5vw;
  }
`


export const Card = styled.div`
 display: flex;
  height: auto;
  width: 400px;
  background-color: #023e8a;
  border-radius: 8px;
  box-shadow: 2px 10px 2px 2px white;
 margin-left: -20px;
 margin-top: 90px;
 padding: 10px 20px;
flex-direction: row;
flex-flow: row wrap;
  transition: 0.4s ease-out;
  position: relative;
  &:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}


:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

@media screen and (max-width: 800px) {
        width: 95vw;
        margin-left: -5px;
        margin-top: 4px;
        box-shadow: 0px 0px 0px 0px #000;
        padding: 5px 10px;
        flex-direction: row;
flex-flow: row wrap;
           
  }
`

export const Tu =styled.p`
color: #faf9f9;
font-size: 15px;
`


export const Image1 = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  margin-top: 120px;
  margin-left: 0px;
  background-image:url(${allr});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
 border-radius: 8px;
 border: 2px solid white;
  
  :hover{
      cursor: pointer;
			transform: scale(1.30);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
     margin-left: -10px;
     height: 40vh;
     :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
  }
`

export const Image2 = styled.div`
    display: flex;
  width: 500px;
  height: 300px;
  margin-top: 50px;
  margin-left: 0px;
  background-image:url(${covid});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
 border: 2px solid white;
  
  :hover{
      cursor: pointer;
			transform: scale(1.30);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
     margin-left: -10px;
     height: 40vh;
     :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
  }
`

export const Image6 = styled.div`
    display: flex;
  width: 500px;
  height: 300px;
  margin-top: 50px;
  margin-left: 0px;
  background-image:url(${devmeet});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
 border: 2px solid white;
  
  :hover{
      cursor: pointer;
			transform: scale(1.30);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
      margin-left: -10px;
     height: 40vh;
     :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
  }
`

export const Image5 = styled.div`

display: flex;
  width: 500px;
  height: 300px;
  margin-top: 50px;
  margin-left: 0px;
  background-image:url(${smart});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
 border: 2px solid white;
  
  :hover{
      cursor: pointer;
			transform: scale(1.30);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
      margin-left: -5px;
     height: 40vh;
     :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
  }
`



export const Image3 = styled.div`

display: flex;
  width: 500px;
  height: 300px;
  margin-top: 50px;
  margin-left: 0px;
  background-image:url(${robo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
 border: 2px solid white;
  
  :hover{
      cursor: pointer;
			transform: scale(1.30);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
      margin-left: -10px;
     height: 40vh;
     :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
  }
`
export const Image4 = styled.div`
  
display: flex;
  width: 500px;
  height: 300px;
  margin-top: 50px;
  margin-left: 0px;
  background-image:url(${dotdev});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
 border: 2px solid white;
  
  :hover{
      cursor: pointer;
			transform: scale(1.30);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
      margin-left: -10px;
     height: 40vh;
     :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
  }
`

export const CTitle = styled.h2`
  color: #f1faee;
  font-weight: strong;
  margin-left: 10px;

  @media screen and (max-width: 800px) {
  width: 80vw; 

  font-size: 15px; 
  }
`
export const Desc = styled.h4`
     color: #f1faee;
  font-weight: 300;
  font-size: 15px;
  margin-left: 10px;
  margin-top: -15px;
  @media screen and (max-width: 800px) {
    width: 90vw; 
    font-size: 15px;
    margin-top: -5px;
  }
`


export const Icons = styled.div`
justify-content: space-evenly;
display: flex;
flex-direction: row;
align-items: center;
margin-left: 10px;
margin-top: 0vh;

@media screen and (max-width: 800px) {
    margin-top: -2vh;
  }
`


export const Lk = styled(LinkExternal)`
  color: white;
  width: 30px;
 
  &:hover{
  color: orange;
  animation: 5s ${bounceAnimation};
}
`


export const Git = styled(Github)`
  color: white;
  width: 30px;
  margin-left: 20px;
  &:hover{
  color: orange;
  animation: 5s ${bounceAnimation};
}
`

export const Demo =styled.a`
font-size: 25px;
color: yellow;
display: flex;
flex-direction: row;

margin-bottom: 20px;
margin-left: 10px;
:hover{
  cursor: pointer;
}
@media screen and (max-width: 800px) {
        
  }
`

export const Code =styled.a`
font-size: 25px;
color: yellow;
display: flex;
flex-direction: row;
margin-left: 20px;
margin-bottom: 20px;

:hover{
  cursor: pointer;
}
@media screen and (max-width: 800px) {
         
  }
`
