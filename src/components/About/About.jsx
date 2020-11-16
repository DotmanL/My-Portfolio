import React from 'react'
import {
	Container,
	Title,
	Post,
	LinkContainer,
	// Image,
	PostContainer,
	// ImgC,
	Header,
	Details,
	Git,
} from './About.styles'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
	return (
		<Container>
			<Header>
				<Title>About Me</Title>
			</Header>

			<Details>
				<ScrollAnimation animateIn='bounceIn' duration={2} delay={3}>
					{/* <ImgC>     
     <Image />
     </ImgC> */}
				</ScrollAnimation>

				<ScrollAnimation animateIn='fadeIn' duration={2} delay={3}>
					<PostContainer>
						<Post>
							"I am a self taught web developer who has taken several courses and learnt a lot via
							tons of tutorials from several online resources most especially from{' '}
							<LinkContainer href='https://udemy.com' target='_blank' rel='noopener noreferrer'>
								Udemy
							</LinkContainer>{' '}
							and from several{' '}
							<LinkContainer href='https://medium.co' target='_blank' rel='noopener noreferrer'>
								Medium
							</LinkContainer>{' '}
							posts. This continuous learning process has equipped me with the knowledge which are
							up-to-date with current best practices. I have acquired skills that has enabled me to
							build amazing web applications that are fully responsive, writing codes that are
							easily readable for future team developments and scalability of my projects. Here is
							my GitHub repo
							<a href='https://github.com/dotmanL'>
								<Git title='Github' />
							</a>
							, you can check for some of my already completed projects and some that I am currently
							working on."
						</Post>
					</PostContainer>
				</ScrollAnimation>
			</Details>
		</Container>
	)
}

export default About
