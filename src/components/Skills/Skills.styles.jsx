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
import {ReactComponent as netlify} from './logos/netlify.svg';
import {ReactComponent as heroku} from './logos/heroku.svg';
import {ReactComponent as js} from './logos/javascript.svg';

export const Container= styled.div`
width: 100%;
background: rgb(28,36,97);
display: flex;
flex-direction: column;
border-bottom: 0px solid black;
@media screen and (max-width: 800px) {
  
 
  }
`
export const SubContainer =styled.div`
width: 100%;
background: rgb(28,36,97);
display: flex;
flex-direction: row;
justify-content: center;
margin-bottom: 15px;
margin-top: 30px;
cursor: pointer;
@media screen and (max-width: 800px) {
  display: flex;
flex-direction: column;
width: 100vw;
 
  }

`
export const Desc =styled.div`
display: flex;
background: white;
flex-direction: row;
padding: 10px 20px;
border: 2px solid black;

justify-content: space-between;
border-radius: 8px;
margin-right: auto;
margin-left: auto;
width: 70%;

@media screen and (max-width: 800px) {
  display: flex;
  margin-left: 7.5vw;
width: 85vw;
height: auto;
  }

`
export const Tx =styled.h4`
color: red;

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
width: 90px;
margin-left: 45%;
padding: 5px 15px;
font-family: 'Arvo', serif;
@media screen and (max-width: 800px) {
 margin-left: 0%;
  }
`


export const Logo =styled.div`
display: flex;
background: #f1faee;
flex-direction: row;
flex-flow: row wrap;
padding: 10px 20px;
border: 2px solid black;

justify-content: space-between;
border-radius: 8px;
width: 25%;
@media screen and (max-width: 800px) {
  display: flex;
  margin-left: 7.5vw;
width: 85vw;
height: auto;
  }
`
export const Fr = styled.h2`
color: black;
border-radius: 8px;
padding: 5px 5px;
text-align: center;
width: 85vw;
:hover {
border-bottom: 2px solid black;

cursor: pointer;
}
@media screen and (max-width: 800px) {
  
  
}

`

export const Backend =styled.div`
display: flex;
background: #f1faee;
flex-direction: row;
flex-flow: row wrap;
padding: 10px 20px;
justify-content: space-between;
margin-left: 20px;
width: 25%;
border: 2px solid black;
border-radius: 8px;
@media screen and (max-width: 800px) {
  display: flex;
  margin-left: 7.5vw;
width: 85vw;
height: auto;
margin-top: 10px;
  }
`

export const Be = styled.h2`
color: black;
border-radius: 8px;
padding: 5px 5px;
text-align: center;
width: 85vw;
:hover {
border-bottom: 2px solid black;

cursor: pointer;
}
`


export const Others =styled.div`
display: flex;
background: #f1faee;

flex-direction: row;
flex-flow: row wrap;
padding: 10px 20px;
border: 2px solid black;
justify-content: space-between;
margin-left: 20px;
width: 25%;
border-radius: 8px;

@media screen and (max-width: 800px) {
  display: flex;
  margin-left: 7.5vw;
width: 85vw;
height: auto;
margin-top: 10px;
 
  }
`

export const Ot =styled.h2`
color: black;
border-radius: 8px;
height: 50px;
text-align: center;
font-size: 15px;
width: 85vw;
:hover {
border-bottom: 2px solid black;

cursor: pointer;
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
margin-top: 15px;
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

export const Heroku =styled(heroku)`
width: 100px;
height: 100px;

`
export const Netlify =styled(netlify)`
width: 100px;
height: 100px;
margin-top: 15px;
`
export const Jscript =styled(js)`
width: 100px;
height: 100px;
margin-top: 15px;
`




