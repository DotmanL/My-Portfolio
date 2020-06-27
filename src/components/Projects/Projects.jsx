import React from 'react'
import { Container, Header, Title,
  Card, CTitle, Image1, Image2, Image3, Image5,
  Image4, Image6, Desc, CardContent, Icons, Lk, Git, Tu } from './Projects.styles';
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
         <Desc>An eCommerce app built with React based on the Zero to Mastery Udemy Course: Complete React Developer. This project was really extensive as it covered majority of the React and Redux ecosystem ranging from the usage of hooks to Lazy loading of pages, Compression, Testing using Jest, Progressive Web App Implementation, Usage of Redux Saga etc.. 
I added features such as Contact Page, Restyling of some components, PayStack Integration etc..
<Tu> Tech Used: Styled Components, React, Redux, Firebase, NodeJS, Express,  Nodemailer for Email Service etc... </Tu>
</Desc>
        <Icons>
        <a href="https://allrange.herokuapp.com/"  target="_blank" rel="noopener noreferrer"><Lk /></a>
        <a href="https://github.com/DotmanL/Allrange-app"   target="_blank" rel="noopener noreferrer"><Git /></a>
        </Icons>
      </Card>

        
          
      <Image6 />   
        <Card> 
    
       
         <CTitle>Devemeet App </CTitle>
         <Desc>A social media app for developers, this app was built based on the Brad Traversy MERN Stack Course project, more features such as email verification, password reset, login with Google, infinite scrolling, image upload functionality, full UI built with styled components, (also replicated Twitter Home Page), etc.. Many more feature still being added.
         <Tu> Tech Used: Styled Components, React, Redux, MongoDB, NodeJS, Express, JSON Web Tokens, Nodemailer for Email Service etc... </Tu>
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
         <Tu> Tech Used: React, Css, Material UI. </Tu>
         </Desc>

        
         <Icons>
        <a href="https://covid19updateapp.herokuapp.com/"  target="_blank" rel="noopener noreferrer"> <Lk /></a>
        <a href="https://github.com/DotmanL/Covid19-Status-App"  target="_blank" rel="noopener noreferrer"><Git /></a>
       
        </Icons>
         
      </Card>
      
      <Image4 alt= "Dotdev"/>   
      <Card> 
  
       
         <CTitle>DotDev Blog</CTitle>
         <Desc>My personal blog site created with Gatsby, still under development.

         <Tu> Tech Used: GatsbyJs, Styled Components. </Tu>
         </Desc>
         <Icons>
        <a href="https://dotdevblog.netlify.app/"  target="_blank" rel="noopener noreferrer"><Lk /></a>
        <a href="https://github.com/DotmanL/Dotdev-Blog"   target="_blank" rel="noopener noreferrer"><Git /></a>
        </Icons>
      </Card>



      <Image5 alt="Smart Brain" />   
      <Card>   
      
           <CTitle>Smart Brain</CTitle>
           <Desc>Smart Brain is a web application that detects faces in pictures which are inputed by pasting an image url. The detection is done with the help of Clarifai API.
           Stacks:
          I used React for the frontend
          Node and Express for the backend 
          PostgreSQL for the database
          <Tu> Tech Used: React, Tachyons for Styling, PostgreSQL, NodeJs, Express  </Tu>
          </Desc>
          <Icons>
          <a href="https://smart-brain-dot.herokuapp.com/"  target="_blank" rel="noopener noreferrer"><Lk/></a>
          <a href="https://github.com/DotmanL/smart-brain"  target="_blank" rel="noopener noreferrer"> <Git /></a>
          </Icons>
        </Card>

        <Image3 alt= "Robofriends" />  
      <Card> 
      
       
         <CTitle>Robofriends</CTitle>
         <Desc>A react app with the the basic functionality of filtering through the card list of robots by the use of a search bar component. Built with React Js and Redux was used for the state management.

         <Tu> Tech Used: React, Redux, Tachyons. </Tu>
         </Desc>
         <Icons>
         <a href="https://dotmanl.github.io/Robofriendsdot"  target="_blank" rel="noopener noreferrer"><Lk /></a>
         <a href="https://github.com/DotmanL/Robofriendsdot"  target="_blank" rel="noopener noreferrer"><Git /></a>
         </Icons>

      </Card>

  
     
      </CardContent>
      </ScrollAnimation>
   </Container>
  )
}

export default Projects;
