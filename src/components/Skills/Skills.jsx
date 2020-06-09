import React from 'react'
import {
  Container,
  SubContainer,
	Title,
	Header,
  Logo,
  Backend,
	Css,
	Express,
	Figma,
	Invision,
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
	Others,
	Fr,
	
	Be,
	Ot,
} from './Skills.styles'
import ScrollAnimation from 'react-animate-on-scroll';
const Skills = () => {
	return (
		<Container>
			<Header>
				<Title>Skills</Title>
			</Header>




			<ScrollAnimation animateIn="fadeIn" duration={2} delay={2}> 
    <SubContainer>
		
			<Logo>  
				<Fr> Front-End </Fr> 
        <Html title='Html' />
				<Css  title='Css' />
        <Reactjs  title='React Js'/>
				<Redux  title='Redux' />
        <Gatsby  title='Gatsby JS' />
        </Logo>


        <Backend>   
					<Be>Backend and Databases</Be>   
        <Nodejs  title='Node JS' />
				<Express  title='Express' />
        <MongoDb   title='MongoDB' />
				<Postgre   title='PostgreSQL'/>
        <FireBase   title='Firebase'/>
        </Backend>
          

	
					<Others>
						<Ot>UI/UX Design, Source Control and Hosting Services</Ot>
				<Invision  title='Invision' />
				<Figma  title='Figma' />
				
				<Git   title='Git'/>
				<Github  title='Github' />
        <Heroku  title='Heroku' />
				<Netlify  title='Netlify'/> 
				</Others>
        
        </SubContainer>
				</ScrollAnimation>
		</Container>
	)
}

export default Skills



