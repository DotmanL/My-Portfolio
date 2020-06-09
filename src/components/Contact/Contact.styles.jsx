import styled from 'styled-components'
import contact from './contact.jpg'


export const Container= styled.div`
height: auto;
background-image: url(${contact});
background-size: cover;
background-position: center; 
background-repeat: no-repeat;
display: flex;
align-items: center;
flex-direction: column;
padding-bottom: 10px;
width: 100%;
`

export const Title =styled.h1 `
font-size: 25px;
color: white;
border: 9px;
margin-top: 20px;
font-family: 'Piedra', cursive;

`

export const SubTitle =styled.h3 `
font-size: 17px;
color: white;

font-family: 'Piedra', cursive;
`

export const FormContainer = styled.div`
  width: 40vw;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and ( max-width: 800px) {
    
    width: 90vw;
    } 
  
  `


export const FormInputT =styled.textarea`
width: 70%;
background: white;
border: none;
overflow: auto;
    outline: none;
    resize: none;
padding-top: 10px;
color: black;

margin-top: 15px;
padding-left: 10px;
font-size: 15px;
height:100px;
border-radius: 5px;
border: 1px solid orange;

@media screen and (max-width: 800px) {
    height: 100px;
  }
`


export const FormInput =styled.input`
width: 70%;
height: 35px;
outline: none;
padding-left: 10px;
background: white;
border-radius: 5px;
margin-top: 15px;
border: 1px solid orange;

@media screen and (max-width: 800px) {
}
`
export const Button = styled.button`
  border: none;
  width: 100px;
  height: 41px;
  border: 2px solid orange;
  margin: 10px auto;
  margin-top: 20px;
  border-radius: 8px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; 
 
  & i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: green;
    border-radius: 8px;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:hover {
    border-color: transparent; }
    &:hover:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1); }
    &:hover i {
      -webkit-transform: translateX(4px);
      transform: translateX(4px); }

`;

export const Footer = styled.h4`
color: orange;
font-size: 15px;
`

export const Footl = styled.a`
color: white;
font-size: 15px;
cursor: pointer;

:hover{
  color: orange;
}
`