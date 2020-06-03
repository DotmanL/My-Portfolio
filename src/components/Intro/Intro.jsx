import React from 'react'
import Typed from 'react-typed';
 

import {
  Git, 
  Introt, 
  Introm,
  //Title,
  Icons,
  Twit,  
  Linked,
  IntroContainer,
  Google
} from './Intro.styles'

const Intro = () => {
  return (
  <IntroContainer >



     
     <Introt> <Typed    
        strings={['I am Lawal Oladotun']}
         typeSpeed={40}
                /> </Introt>
                <br/>
 
                <Introm>               
                <Typed 
                
                strings={[
                    'React Developer',
                    'Mechanical Engineer',
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