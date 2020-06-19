import styled  from 'styled-components'
import me from './me.jpg';

import {Github} from '@styled-icons/boxicons-logos/Github';

export const Container= styled.div`
height: auto;
background: black;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
border-top: 0px solid orange;
border-bottom: 0px solid orange;
padding: 20px 20px;
@media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
 
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


export const Title =styled.h4 `
font-size: 25px;
color: white;
font-family: 'Arvo', serif;
margin-top: 10px;
padding: 5px 15px;

`



export const Git = styled(Github)`
  color: black;
  width: 50px;
  &:hover{
  color: white;
}
`


export const Details= styled.div`
height: auto;
display: flex;
flex-direction: row;
justify-content: center;
@media screen and (max-width: 800px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`


export const PostContainer =styled.div`
background: whitesmoke;
border: 2px solid white;
display: flex;
flex-direction: row;
margin-left: 20px;
width: 600px;
height:430px;
border-radius: 8px;
margin-top: 20px;
padding: 20px 20px;
@media screen and (max-width: 800px) {
  width: 90vw;
  margin-left: 0px;
  height: auto;

 
  }
`


export const Post = styled.p`
font-size: 20px;
color: black;
font-style: italic;
text-align: center;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

@media screen and (max-width: 800px) {
   height: auto;
  }
`
export const ImgC = styled.div`
display: flex;
flex-direction: row;
background: rgb(28,36,97);
justify-content: center;
border: 1.5px solid white;
margin-top: 20px;
margin-left: 20px;
width: 300px;
height:430px;
align-items: center;
border-radius: 8px;


@media screen and (max-width: 800px) {
  height: 95vh;
  width: 90vw;
  display: flex;
flex-direction: row;
margin-left: 0px;
  }
`


export const Image = styled.div`
background-image:url(${me});
background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;  
  width: 270px;
  height: 400px;
  border-radius: 8px;
  :hover{
      cursor: pointer;
			transform: scale(1.05);
			transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
 
  @media screen and (max-width: 800px) {
    width: 85vw;
    height: 90vh;
  }
 
` 
