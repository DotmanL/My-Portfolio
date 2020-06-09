import React from 'react'
import { Container, Header, Title,
  Card, CTitle, Image1, Image2, Image3, Image5,
  Image4, Image6, Desc, CardContent, Icons, Lk, Git } from './Projects.styles';
  import ScrollAnimation from 'react-animate-on-scroll';



const Projects = () => {
  return (
   <Container>

<Header>
    <Title>Projects</Title>
    </Header>
     <ScrollAnimation animateIn="fadeIn" duration={2} delay={3}>
  <CardContent>

  <Image1 alt='Allrange Store' /> 
  <Card> 
        
       
         <CTitle>Allrange Store</CTitle>
         <Desc>An eCommerce app built with react.

Web app built with React, Redux for State Mangement.
Redux-saga middlware to help handle our asynchrounous actions by making it more efficient.
Styled Components for our css styling, more efficient in terms of code splitting.
Firebase, firestore for our database.
Node Api back-end to handle our payment integrations and nodemailer.
Progressive Web App compliant.
Payment Integration with Stripe and Paystack.
Contact form with nodemailer on the back-end.
React lazy to lazy load our pages, helps in improving perfomance.</Desc>
        <Icons>
        <a href="https://allrange.herokuapp.com/"  target="_blank" rel="noopener noreferrer"><Lk /></a>
        <a href="https://github.com/DotmanL/Allrange-app"   target="_blank" rel="noopener noreferrer"><Git /></a>
        </Icons>
      </Card>

        
          
      <Image6 />   
        <Card> 
    
       
         <CTitle>Devemeet App </CTitle>
         <Desc>A Covid19 Status Update App for global cases and cases by country, illustrated with the use of line and bar charts.
         <p> Tools Used: Html, Css, </p>
         </Desc>

        
         <Icons>
        <a href="https://covid19updateapp.herokuapp.com/"  target="_blank" rel="noopener noreferrer"> <Lk /></a>
        <a href="https://github.com/DotmanL/Covid19-Status-App"  target="_blank" rel="noopener noreferrer"><Git /></a>
       
        </Icons>
         
      </Card>





      <Image2 alt= "covid"/>   
        <Card> 
    
       
         <CTitle>Covid19 Status Update </CTitle>
         <Desc>A Covid19 Status Update App for global cases and cases by country, illustrated with the use of line and bar charts.
         <p> Tools Used: Html, Css, </p>
         </Desc>

        
         <Icons>
        <a href="https://covid19updateapp.herokuapp.com/"  target="_blank" rel="noopener noreferrer"> <Lk /></a>
        <a href="https://github.com/DotmanL/Covid19-Status-App"  target="_blank" rel="noopener noreferrer"><Git /></a>
       
        </Icons>
         
      </Card>
      
      <Image5 alt="Smart Brain" />   
      <Card>   
      
           <CTitle>Smart Brain</CTitle>
           <Desc>Smart Brain is a web application that detects faces in pictures which are inputed by pasting an image url. The detection is done with the help of Clarifai API.
           Stacks:
          I used React for the frontend
          Node and Express for the backend 
          PostgreSQL for the database</Desc>
          <Icons>
          <a href="https://smart-brain-dot.herokuapp.com/"  target="_blank" rel="noopener noreferrer"><Lk/></a>
          <a href="https://github.com/DotmanL/smart-brain"  target="_blank" rel="noopener noreferrer"> <Git /></a>
          </Icons>
        </Card>

        <Image3 alt= "Robofriends" />  
      <Card> 
      
       
         <CTitle>Robofriends</CTitle>
         <Desc>A react app with the the basic functionality of filtering through the card list of robots by the use of a search bar component. Built with React Js and Redux was used for the state management.</Desc>
         <Icons>
         <a href="https://dotmanl.github.io/Robofriendsdot"  target="_blank" rel="noopener noreferrer"><Lk /></a>
         <a href="https://github.com/DotmanL/Robofriendsdot"  target="_blank" rel="noopener noreferrer"><Git /></a>
         </Icons>

      </Card>

      <Image4 alt= "Dotdev"/>   
      <Card> 
  
       
         <CTitle>DotDev Blog</CTitle>
         <Desc>My personal blog site crated with Gatsby, still under development</Desc>
         <Icons>
        <a href="https://dotdevblog.netlify.app/"  target="_blank" rel="noopener noreferrer"><Lk /></a>
        <a href="https://github.com/DotmanL/Dotdev-Blog"   target="_blank" rel="noopener noreferrer"><Git /></a>
        </Icons>
      </Card>
     
      </CardContent>
      </ScrollAnimation>
   </Container>
  )
}

export default Projects;
