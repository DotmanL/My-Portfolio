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
						<a href={project.ProjectLink} target='_blank' rel='noopener noreferrer'>
							<Image src={project.ProjectImage} alt='project-screenshot' />
						</a>

						<Card>
							<ProjectName>{project.ProjectName}</ProjectName>
							<Desc>{project.ProjectDescription}</Desc>
							{/* <Theader>Tech Used</Theader> */}
							<Icons>
								<a href={project.ProjectLink} target='_blank' rel='noopener noreferrer'>
									<Lk />
								</a>
								<a href={project.GithubLink} target='_blank' rel='noopener noreferrer'>
									<Git />
								</a>
							</Icons>
							<TechDiv>
								{project.TechUsed.map((TechUsed, i) => (
									<Tech key={i}>
										<Tu> {TechUsed}</Tu>
									</Tech>
								))}
							</TechDiv>
						</Card>
					</CardContent>
				))}
			</Main>
		</Container>
	)
}

export default Projects
