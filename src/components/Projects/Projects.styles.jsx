import styled, { keyframes } from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { LinkExternal } from '@styled-icons/boxicons-regular/LinkExternal'
import { wobble } from 'react-animations'

const bounceAnimation = keyframes`${wobble}`

export const Container = styled.div`
	height: auto;
	width: 100%;
	background: white;
	display: flex;
	border-bottom: 0px solid orange;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 5px 0px;
	@media screen and (max-width: 800px) {
		display: flex;
		width: 100vw;
	}
`

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid #023e8a;
	height: 65px;
	width: 200px;
	padding: 0px;
	margin: 5px 0px 0px 50px;

	@media screen and (max-width: 800px) {
		margin: 5px 0px 0px 20px;
	}
`

export const Title = styled.h4`
	font-size: 35px;
	color: black;
	font-family: 'Arvo', serif;
`

export const Main = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	justify-content: center;
`

export const CardContent = styled.div`
	height: auto;
	display: flex;
	flex-direction: row;
	padding: 20px 60px;
	justify-content: center;

	@media screen and (max-width: 800px) {
		display: flex;
		background: 'orange';
		flex-direction: column;
		padding: 0px 0px;
		margin: 15px 0px;
	}
`

export const Image = styled.img`
	display: flex;
	width: 500px;
	height: 300px;
	border-radius: 5px;
	margin: 0px 10px 0px 0px;
	box-shadow: 2px 1px 2px 2px #023e8a;
	padding: 5px;
	border: 2px solid #023e8a;

	:hover {
		cursor: pointer;
		transform: scale(1.04);
		transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}

	@media screen and (max-width: 800px) {
		width: 90vw;
		height: auto;
		padding: 5px;
		margin: 0px 0px 0px 0px;
		:hover {
			cursor: pointer;
			transform: scale(1.02);
			transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
	}
`

export const Card = styled.div`
	display: flex;
	height: auto;
	width: 40vw;
	background-color: white;
	border-radius: 8px;
	border: 2px solid #023e8a;
	box-shadow: 2px 2px 2px 2px #023e8a;
	padding: 5px 30px;
	flex-direction: column;
	justify-content: center;
	/* margin: 20px 0px 10px 0px; */
	transition: 0.4s ease-out;
	position: relative;
	&:hover {
		transform: translateY(-5px);
		transition: 0.4s ease-out;
	}

	:hover ~ .card {
		position: relative;
		left: 50px;
		transition: 0.4s ease-out;
	}

	@media screen and (max-width: 800px) {
		width: 90vw;
		padding: 7px 10px;
		margin: 10px 0px 10px 0px;
	}
`

export const ProjectName = styled.h2`
	margin-left: 6px;
	color: black;
	font-weight: 800;
	@media screen and (max-width: 800px) {
	}
`

export const Desc = styled.h3`
	color: black;
	font-weight: 600;
	text-align: justify;
	margin: -18px 5px 2px 5px;
	@media screen and (max-width: 800px) {
		margin: -16px 5px 5px 5px;
		font-weight: 550;
	}
`

export const Icons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 2px 4px 10px 0px;
	padding: 0px 10px;
	@media screen and (max-width: 800px) {
		margin-top: 6px;
		margin-left: 3px;
	}
`

export const Lk = styled(LinkExternal)`
	color: black;
	width: 40px;

	&:hover {
		color: #023e8a;
		animation: 5s ${bounceAnimation};
	}
`

export const Git = styled(Github)`
	color: black;
	width: 40px;
	margin-left: 20px;
	&:hover {
		color: #023e8a;
		animation: 5s ${bounceAnimation};
	}
`

export const TechDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-flow: row wrap;
	width: 100%;
	margin: 5px 4px 5px 4px;
`

export const Tech = styled.div`
	background: #023e8a;
	color: white;
	display: flex;
	border-radius: 5px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 10px 4px;
	padding: 1px 10px;
	height: 30px;

	&:hover {
		background: white;
		color: #023e8a;
	}
	@media screen and (max-width: 800px) {
		padding: 1px 9px;
		margin: 10px 3px;
	}
`

export const Theader = styled.h2`
	font-size: 23px;
	color: #023e8a;
	font-weight: 900;
	align-self: center;
	margin-top: 4px;
`

export const Tu = styled.h3`
	font-size: 15px;
	font-weight: 900;
	@media screen and (max-width: 800px) {
		font-size: 13px;
	}
`
