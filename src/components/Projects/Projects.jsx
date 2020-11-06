import React from 'react'
import { data } from './ProjectData'

import {
	Container,
	Header,
	Title,
	Main,
	Card,
	CardContent,
	ProjectName,
	Image,
	Desc,
	TechDiv,
	// Theader,
	Icons,
	Lk,
	Git,
	Tech,
	Tu,
} from './Projects.styles'

const Projects = () => {
	return (
		<Container>
			<Header>
				<Title>Projects</Title>
			</Header>
			<Main>
				{data.map((project, id) => (
					<CardContent key={project.id}>
						<Image src={project.ProjectImage} alt='project-screenshot' />
						<Card>
							<ProjectName>{project.ProjectName}</ProjectName>
							<Desc>{project.ProjectDescription}</Desc>
							{/* <Theader>Tech Used</Theader> */}
							<TechDiv>
								{project.TechUsed.map((TechUsed, i) => (
									<Tech key={i}>
										<Tu> {TechUsed}</Tu>
									</Tech>
								))}
							</TechDiv>
							<Icons>
								<a href={project.ProjectLink} target='_blank' rel='noopener noreferrer'>
									<Lk />
								</a>
								<a href={project.GithubLink} target='_blank' rel='noopener noreferrer'>
									<Git />
								</a>
							</Icons>
						</Card>
					</CardContent>
				))}
			</Main>
		</Container>
	)
}

export default Projects
