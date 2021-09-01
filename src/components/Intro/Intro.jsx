import React from 'react'
import Typed from 'react-typed'

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
			<Introf>
				<Typed showCursor={false} strings={['Hi, I am']} typeSpeed={40} />
			</Introf>

			<Introt>
				<Typed showCursor={false} strings={['Lawal Oladotun']} typeSpeed={40} />
			</Introt>

			<Introm>
				<Typed
					strings={['FullStack Developer (MERN Stack)']}
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
					href='https://drive.google.com/file/d/1iJqvsLL5PWd9t9-6dfXFxE5iuIzXpAIq/view?usp=sharing'
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
