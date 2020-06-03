import React from 'react'
import { Container, Title, Post, Image } from './About.styles';
//import Fade from 'react-reveal/Fade';
import ScrollAnimation from 'react-animate-on-scroll';



const About = () => {
  return (
   <Container>

     <Image />
     <ScrollAnimation animateIn="fadeInRightBig" duration={2} delay={3}>
     <Post>
     "I have spent the past few months in learning more about web development, I have taken several courses online from Udemy to broaden and keep up to date with the current web technologies used globally. I have learnt how to build web apps with React JS while using Redux also for State management, Styled Components for my styling and also created RESTful Api with Node Js and Express. I have also worked with various web tools such as: using Git, MongoDB, PostgreSQL, Firebase etc. I have worked on course based projects which I have developed and added features of my own, I also ensure to always write clean and understandable code for future team developments and scalability of my projects. Here is my GitHub repo (https://github.com/dotmanL), you can check for some of my already completed projects and some that I am currently working on."
     </Post>
     </ScrollAnimation>
   </Container>
  )
}

export default About;
