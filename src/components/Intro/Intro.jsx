import React from 'react'
import Typed from 'react-typed'
import ScrollAnimation from 'react-animate-on-scroll'
import {
	Git,
	Introt,
	Introm,
	Introf,
	Icons,
	Twit,
	Linked,
	IntroContainer,
	Google,
} from './Intro.styles'

const Intro = () => {
	return (
		<IntroContainer>
				<ScrollAnimation animateIn='zoomIn' duration={2} delay={3}>
			<Introf>
				<Typed showCursor={false} strings={['Hi, I am']} typeSpeed={40} />
			</Introf>
			</ScrollAnimation>
			<ScrollAnimation animateIn='zoomIn' duration={2} delay={3}>
			<Introt>
				<Typed showCursor={false} strings={['Lawal Oladotun']} typeSpeed={40} />
			</Introt>
			</ScrollAnimation>
		
			<Introm>
				<Typed
					strings={['Fullstack Developer']}
					typeSpeed={90}
					backSpeed={90}
					loop
				></Typed>
			</Introm>

			<Icons>
				<a href='https://github.com/dotmanL' target='_blank' rel='noopener noreferrer'>
					<Git />
				</a>
				<a href='https://twitter.com/dotman_l' target='_blank' rel='noopener noreferrer'>
					<Twit />
				</a>
				<a
					href='https://www.linkedin.com/in/oladotun-lawal-7a6b18138/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Linked />
				</a>
				<a
					href='https://drive.google.com/file/d/1kc8Tt3Xao1RbReGTsElpPL7-MRAWxp-S/view?usp=drivesdk'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Google />
				</a>
			</Icons>
		</IntroContainer>
	)
}

export default Intro
