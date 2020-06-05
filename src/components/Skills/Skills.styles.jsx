import styled from 'styled-components'
import {ReactComponent as css} from './logos/css-3.svg';
import {ReactComponent as express} from './logos/express.svg';

import {ReactComponent as figma} from './logos/figma.svg';
import {ReactComponent as firebase} from './logos/firebase.svg';
import {ReactComponent as gatsby} from './logos/gatsby.svg';
import {ReactComponent as git} from './logos/git.svg';
import {ReactComponent as github} from './logos/github.svg';
import {ReactComponent as html} from './logos/html5.svg';
import {ReactComponent as invision} from './logos/invision.svg';
import {ReactComponent as mongodb} from './logos/mongodb.svg';
import {ReactComponent as node} from './logos/nodejs.svg';
import {ReactComponent as postgre} from './logos/postgresql.svg';
import {ReactComponent as react} from './logos/react.svg';
import {ReactComponent as redux} from './logos/redux.svg';




export const Container= styled.div`
width: 100%;
background: #17141d;
display: flex;
flex-direction: column;
align-items: center;
border-bottom: 2px solid orange;
@media screen and (max-width: 800px) {
  
 
  }
`
export const SubContainer =styled.div`
width: 100%;
background: #17141d;
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 15px;

@media screen and (max-width: 800px) {
  display: flex;
flex-direction: column;
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
margin-top: 0px;
background: black;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`


export const Logo =styled.div`
display: flex;
background: white;
margin-top: -10px;
flex-direction: row;
flex-flow: row wrap;
padding: 40px 20px;
margin-top: 15px;
border: 2px solid orange;
justify-content: space-between;
border-radius: 8px;
width: 25%;
@media screen and (max-width: 800px) {
  display: flex;
  margin-left: 7.5vw;
width: 85vw;
 
  }
`

export const Backend =styled.div`
display: flex;
background: white;
margin-top: -10px;
flex-direction: row;
flex-flow: row wrap;
padding: 40px 20px;
margin-top: 15px;
justify-content: space-between;
margin-left: 20px;
width: 25%;
border: 2px solid orange;
border-radius: 8px;
@media screen and (max-width: 800px) {
  display: flex;
  margin-left: 0px;
  width: 85vw;
  margin-left: 7.5vw;
  }
`
export const Others =styled.div`
display: flex;
background: white;
margin-top: -10px;
flex-direction: row;
flex-flow: row wrap;
padding: 40px 20px;
border: 2px solid orange;
margin-top: 15px;
justify-content: space-between;
margin-left: 20px;
width: 25%;
border-radius: 8px;

@media screen and (max-width: 800px) {
  display: flex;
 margin-left: 7.5vw;
 width: 85vw;
 
  }
`

export const Css =styled(css)`
width: 100px;
height: 100px;
`


export const Express =styled(express)`
width: 100px;
height: 100px;
`

export const Figma =styled(figma)`
width: 100px;
height: 100px;
`

export const FireBase =styled(firebase)`
width: 100px;
height: 100px;
`

export const Gatsby =styled(gatsby)`
width: 100px;
height: 100px;
`


export const Git =styled(git)`
width: 100px;
height: 100px;
`

export const Github =styled(github)`
width: 100px;
height: 100px;
`

export const Html =styled(html)`
width: 100px;
height: 100px;
`


export const Invision =styled(invision)`
width: 100px;
height: 100px;
`


export const Nodejs =styled(node)`
width: 100px;
height: 100px;
`

export const Postgre =styled(postgre)`
width: 100px;
height: 100px;
`

export const Redux =styled(redux)`
width: 100px;
height: 100px;
`

export const Reactjs =styled(react)`
width: 100px;
height: 100px;
`


export const MongoDb =styled(mongodb)`
width: 100px;
height: 100px;
`



