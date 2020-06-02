import React from 'react'
import { Container, 
  Card, CTitle, Image1, Image2, Image3,
  Image4, Bar, Desc, Demo, Code, CardContent } from './Projects.styles';
  import Bounce from 'react-reveal/Bounce';


const Projects = () => {
  return (
   <Container>
     <Bounce left big>
  <CardContent>


  <Card> 
      <Image1 />   
         <Bar/>
         <CTitle>Smart Brain</CTitle>
         <Desc>Smart Brain is a web application that detects faces in pictures which are inputed by pasting an image url. The detection is done with the help of Clarifai API.
         Stacks:
        I used React for the frontend
        Node and Express for the backend 
        PostgreSQL for the database</Desc>
        <Demo>Demo</Demo>
        <Code>Code</Code>
      </Card>

        
        <Card> 
      <Image2 />   
         <Bar/>
         <CTitle>Covid19 Status Update </CTitle>
         <Desc>A Covid19 Status Update App for global cases and cases by country, illustrated with the use of line and bar charts.</Desc>
         <Demo href="https://covid19updateapp.herokuapp.com/">Demo</Demo>
         <Code href="https://github.com/DotmanL/Covid19-Status-App">Code</Code>
      </Card>
      
      <Card>   
        <Image1 alt="Smart Brain" />   
           <Bar/>
           <CTitle>Smart Brain</CTitle>
           <Desc>Smart Brain is a web application that detects faces in pictures which are inputed by pasting an image url. The detection is done with the help of Clarifai API.
           Stacks:
          I used React for the frontend
          Node and Express for the backend 
          PostgreSQL for the database</Desc>
          <Demo href="https://smart-brain-dot.herokuapp.com/">Demo</Demo>
          <Code href="https://github.com/DotmanL/smart-brain">Code</Code>
        </Card>


      <Card> 
      <Image3 />   
         <Bar/>
         <CTitle>Robofriends</CTitle>
         <Desc>A react app with the the basic functionality of filtering through the card list of robots by the use of a search bar component. Built with React Js and Redux was used for the state management.</Desc>
         <Demo href="https://dotmanl.github.io/Robofriendsdot">Demo</Demo>
         <Code href="https://github.com/DotmanL/Robofriendsdot">Code</Code>
      </Card>

      <Card> 
      <Image4 />   
         <Bar/>
         <CTitle>DotDev Blog</CTitle>
         <Desc>My personal blog site crated with Gatsby, still under development</Desc>
        <Demo href="https://dotdevblog.netlify.app/">Demo</Demo>
        <Code href="https://github.com/DotmanL/Dotdev-Blog" >Code</Code>
      </Card>

      </CardContent>
      </Bounce>

   </Container>
  )
}

export default Projects;
