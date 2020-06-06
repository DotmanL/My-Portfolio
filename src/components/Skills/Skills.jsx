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
        <Html />
				<Css />
        <Reactjs />
				<Redux />
        <Gatsby />
        </Logo>


        <Backend>   
					<Be>Backend and Databases</Be>   
        <Nodejs />
				<Express />
        <MongoDb />
				<Postgre />
        <FireBase />
        </Backend>
          

	
					<Others>
						<Ot>UI/UX Design, Source Control and Hosting Services</Ot>
				<Invision />
				<Figma />
				
				<Git />
				<Github />
        <Heroku />
				<Netlify/> 
				</Others>
        
        </SubContainer>
				</ScrollAnimation>
		</Container>
	)
}

export default Skills
