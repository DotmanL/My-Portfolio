import React from 'react'
import {
	Container,
	SubContainer,
	Title,
	Header,
	Card,
	Css,
	Jscript,
	Express,
	// Figma,
	// Invision,
	MongoDb,
	Postgre,
	Nodejs,
	Reactjs,
	Redux,
	FireBase,
	Gatsby,
	Git,
	Github,
	Heroku,
	Netlify,
	Html,
	Fr,
	Be,
	Ot,
} from './Skills.styles'
import ScrollAnimation from 'react-animate-on-scroll'
const Skills = () => {
	return (
		<Container>
			<Header>
				<Title>Skills</Title>
			</Header>
			<ScrollAnimation animateIn='fadeIn' duration={2} delay={2}>
				<SubContainer>
					<Card>
						<Fr> Front-End </Fr>
						<Html title='Html' />
						<Css title='Css' />
						<Jscript title='Javascript' />
						<Reactjs title='React Js' />
						<Redux title='Redux' />
						<Gatsby title='Gatsby JS' />
					</Card>

					<Card>
						<Be>Backend and Databases</Be>
						<Nodejs title='Node JS' />
						<Express title='Express' />
						<MongoDb title='MongoDB' />
						<Postgre title='PostgreSQL' />
						<FireBase title='Firebase' />
					</Card>

					<Card>
						<Ot>Source Control and Hosting Services</Ot>
						{/* <Invision title='Invision' /> */}
						{/* <Figma title='Figma' /> */}
						<Git title='Git' />
						<Github title='Github' />
						<Heroku title='Heroku' />
						<Netlify title='Netlify' />
					</Card>
				</SubContainer>
			</ScrollAnimation>
		</Container>
	)
}

export default Skills
