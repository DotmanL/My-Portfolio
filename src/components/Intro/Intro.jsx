import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Particles from '../Particles/Particles';
import {Container,
  Git, 
  ReactTyping, 
  Title,
  Icons,
  Twit, 
  Image, 
  Linked,
  IntroContainer,
  Google
} from './Intro.styles'

const Intro = () => {
  return (
  <IntroContainer >
       <Particles />
      <Container>
              <Image />
          <ReactTyping>
        <ReactTypingEffect text='I am Lawal Oladotun'/>

        <Title>A budding young engineer with passion to become a full stack developer</Title> 
       </ReactTyping>   

    <Icons>
    <a href="https://github.com/dotmanL"> <Git /> </a>
    <a href="https://twitter.com/dotman_l"> <Twit/> </a>
    <a href="https://www.linkedin.com/in/oladotun-lawal-7a6b18138/"> <Linked /> </a>
    <a href="https://drive.google.com/open?id=1Ef9kakPMAQwJplzJVhBcbkxDaUl3AZdh"> <Google /> </a>

     </Icons>

      </Container>
      </IntroContainer>
  )
}

export default Intro
