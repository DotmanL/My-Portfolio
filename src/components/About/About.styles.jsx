import styled from 'styled-components'
import me from './me.jpg'

import { Github } from '@styled-icons/boxicons-logos/Github'

export const Container = styled.div`
	height: auto;
	/* background: rgb(28, 36, 97); */
	background: white;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* border-bottom: 1px solid black; */
	padding: 20px 20px;
	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
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
		margin: 5px 0px 0px 10px;
	}
`

export const Title = styled.h4`
	font-size: 35px;
	color: black;
	font-family: 'Arvo', serif;
`

export const Git = styled(Github)`
	color: #023e8a;
	width: 50px;
	&:hover {
		color: black;
	}
`

export const Details = styled.div`
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

export const PostContainer = styled.div`
	background: whitesmoke;
	border: 2px solid white;
	display: flex;
	flex-direction: row;
	margin-left: 20px;
	width: 80vw;
	border-radius: 8px;
	margin-top: 20px;
	padding: 10px 20px;
	@media screen and (max-width: 800px) {
		width: 90vw;
		margin-left: 0px;
		height: auto;
	}
`

export const LinkContainer = styled.a`
	color: #023e8a;
	cursor: pointer;
`

export const Post = styled.p`
	font-size: 20px;
	color: black;
	font-style: italic;
	text-align: center;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;

	@media screen and (max-width: 800px) {
		height: auto;
	}
`
export const ImgC = styled.div`
	display: flex;
	flex-direction: row;
	background: rgb(28, 36, 97);
	justify-content: center;
	border: 1.5px solid white;
	margin-top: 20px;
	margin-left: 20px;
	width: 300px;
	height: 430px;
	align-items: center;
	border-radius: 8px;

	@media screen and (max-width: 800px) {
		height: 95vh;
		width: 90vw;
		display: flex;
		flex-direction: row;
		margin-left: 0px;
	}
`

export const Image = styled.div`
	background-image: url(${me});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	width: 270px;
	height: 400px;
	border-radius: 8px;
	:hover {
		cursor: pointer;
		transform: scale(1.05);
		transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}

	@media screen and (max-width: 800px) {
		width: 85vw;
		height: 90vh;
	}
`
