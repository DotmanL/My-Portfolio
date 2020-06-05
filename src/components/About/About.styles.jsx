import styled  from 'styled-components'
import me from './me.jpg';


export const Container= styled.div`
height: auto;
background: #17141d;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
border-top: 2px solid orange;
border-bottom: 2px solid orange;
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


export const Title =styled.h1 `
font-size: 25px;
color: white;
margin-top: -20px;
background: green;
padding: 5px 15px;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
background: white;
display: flex;
flex-direction: row;
margin-left: 20px;
width: 600px;
height:430px;
border-radius: 8px;
border: 2px solid orange;
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
background: white;
justify-content: center;
border: 2px solid orange;
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
