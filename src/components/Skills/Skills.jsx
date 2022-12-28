import React from 'react'
import {
	Container,
	SubContainer,
	Title,
	Header,
	Card,
	Css,
	Jscript,
	Typescript,
	Express,
	Csharp,
	SqlServer,
	Azure,
	Dotnet,
	MongoDb,
	Nodejs,
	Reactjs,
	Redux,
	Gatsby,
	Git,
	Github,
	Heroku,
	Netlify,
	Html,
	STitle,
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
						<STitle> Front-End </STitle>
						<Html title='Html' />
						<Css title='Css' />
						<Jscript title='Javascript' />
						<Typescript title ='TypeScript' />
						<Reactjs title='React Js' />
						<Redux title='Redux' />
						<Gatsby title='Gatsby JS' />
					</Card>

					<Card>
						<STitle>Backend and Databases</STitle>
						<Csharp title='Csharp' />
						<Nodejs title='Node JS' />
						<Dotnet title='.Net' />
						<Express title='Express' />
						<MongoDb title='MongoDB' />
						<SqlServer title='SqlServer' />
		
					</Card>

					<Card>
						<STitle>Source Control and Hosting Services</STitle>
						<Git title='Git' />
						<Github title='Github' />
						<Heroku title='Heroku' />
						<Netlify title='Netlify' />
						<Azure title='Azure'/>
					</Card>
				</SubContainer>
			</ScrollAnimation>
		</Container>
	)
}

export default Skills
