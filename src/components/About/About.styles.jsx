import styled from 'styled-components'
import dot from './dot.png';

export const Container= styled.div`
height: auto;
background: white;
display: flex;
flex-direction: row;
`

export const Title =styled.h1 `
font-size: 50px;
color: black;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Post = styled.p`
font-size: 25px;
color: black;
width: 70vw;
font-style: italic;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
@media screen and (max-width: 800px) {
      width: 60vw;
      font-size: 15px;
      margin-left: -10px;
  }
`


export const Image = styled.div`
background-image:url(${dot});
background-size: cover;
  background-repeat: no-repeat;
  display: flex;  
  margin-left: 50px;
  width: 200px;
  height: 250px;
  @media screen and (max-width: 800px) {
      margin-left: -5px;
      width: 150px;
      height: 200px;
  }
 
` 