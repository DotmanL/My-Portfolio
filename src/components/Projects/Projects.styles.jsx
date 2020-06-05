import styled from 'styled-components'
import smart from './images/smart.png'
import covid from './images/covid.png'
import robo from './images/robo.png'
import dotdev from './images/dotdev.png'


export const Container= styled.div`
height: auto;
width: 100%;
background: #17141d;
display: flex;
border-bottom: 2px solid orange;
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
margin-top: -9px;
background: green;
padding: 5px 15px;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const CardContent= styled.div`

width: 100%;
height: auto;
display: flex;
flex-direction: row;
flex-flow: row wrap;

@media screen and (max-width: 800px) {
    display: flex;
    margin-top: 10px;
    width: 95vw;
    margin-left: 2.5vw;
  }
`


export const Card = styled.div`
 display: flex;
  height: auto;
  width: 430px;
  background-color: black;
  border-radius: 10px;
  box-shadow: 2px 10px 2px 2px #000;
 margin: 60px auto;
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
        
        margin: 14px auto;
        box-shadow: 0px 0px 0px 0px #000;
        padding: 5px 10px;
        flex-direction: row;
flex-flow: row wrap;
           
  }
`




export const Image1 = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  margin-top: 10px;
  margin-left: 15px;
  background-image:url(${smart});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  
  :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
     margin-left: 0px;
     height: 40vh;
    
  }
`

export const Image2 = styled.div`
  width: 400px;
  height: 200px;
  margin-top: 10px;
  margin-left: 15px;
  background-image:url(${covid});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  
  :hover{
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
     margin-left: 0px;
     height: 40vh;
    
  }
`

export const Image3 = styled.div`

  width: 400px;
  height: 200px;
  margin-top: 10px;
  margin-left: 15px;
  background-image:url(${robo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  
  :hover{
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
     margin-left: 0px;
     height: 40vh;
    
  }
`
export const Image4 = styled.div`
  width: 400px;
  height: 200px;
  margin-top: 10px;
  margin-left: 15px;
  background-image:url(${dotdev});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  
  :hover{
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
   
    @media screen and (max-width: 800px) {
      width: 95vw;
     margin-left: 0px;
     height: 40vh;
    
  }
`

export const CTitle = styled.h2`
  color: white;
  font-weight: strong;
  margin-left: 10px;

  @media screen and (max-width: 800px) {
  width: 80vw; 

  font-size: 15px; 
  }
`
export const Desc = styled.p`
  color: white;
  font-weight: 300;
  margin-left: 10px;
  margin-top: -15px;
  @media screen and (max-width: 800px) {
    width: 90vw; 
    font-size: 15px;
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
