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
  Html,
  Others
} from './Skills.styles'

const Skills = () => {
	return (
		<Container>
			<Header>
				<Title>Skills</Title>
			</Header>
    <SubContainer>
			<Logo>
        <p> Front-End</p>
        <Html />
				<Css />
        <Reactjs />
				<Redux />
        <Gatsby />
        </Logo>

        <Backend>
        <p> Back-End and Databases</p>
        <Nodejs />
				<Express />
        <MongoDb />
				<Postgre />
        <FireBase />
        </Backend>
          <Others>

          <p> Design, Source Control and Hosting Platforms</p>
				<Invision />
				<Figma />
				
				<Git />
				<Github />
        </Others>
        </SubContainer>
		
		</Container>
	)
}

export default Skills
