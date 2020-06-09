import React from 'react'
import Typed from 'react-typed';
 

import {
  Git, 
  Introt, 
  Introm,
  Introf,
  Icons,
  Twit,  
  Linked,
  IntroContainer,
  Google
} from './Intro.styles'

const Intro = () => {
  return (
  <IntroContainer >



     
     <Introf> <Typed    
        strings={['Hi, I am']}
         typeSpeed={40}
                /> </Introf>
                  
     <Introt> <Typed    
        strings={['Lawal Oladotun']}
         typeSpeed={40}
                /> </Introt>
              
 
                <Introm>               
                <Typed 
                
                strings={[
                    'React Developer',
                    'Aspiring FullStack Developer']}
                    typeSpeed={90}
                    backSpeed={50}
                    loop >
                    
                </Typed>
                </Introm>
   
    <Icons>
    <a href="https://github.com/dotmanL"> <Git /> </a>
    <a href="https://twitter.com/dotman_l"> <Twit/> </a>
    <a href="https://www.linkedin.com/in/oladotun-lawal-7a6b18138/"> <Linked /> </a>
    <a href="https://drive.google.com/open?id=1Ef9kakPMAQwJplzJVhBcbkxDaUl3AZdh"> <Google /> </a>

     </Icons>

    
      </IntroContainer>
  )
}

export default Intro