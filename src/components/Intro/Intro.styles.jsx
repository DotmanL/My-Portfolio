import styled, { keyframes } from 'styled-components'

import { Github } from '@styled-icons/boxicons-logos/Github'
import { Twitter } from '@styled-icons/entypo-social/Twitter'

import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { GoogleDrive } from '@styled-icons/fa-brands/GoogleDrive'
import hbg from './assets/bgnew.jpg'

import { wobble } from 'react-animations'

const bounceAnimation = keyframes`${wobble}`

export const IntroContainer = styled.div`
	background-image: url(${hbg});
	box-shadow: inset 0 0 0 2000px rgba(29, 161, 242, 0.1);
	height: 100vh;
	justify-content: center;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	align-items: flex-start;
	padding: 0px 0px 0px 190px;
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	@media screen and (max-width: 800px) {
		height: 100vh;
		padding: 0px 0px 0px 20px;
		overflow-x: hidden;
		margin-top: 0px;
	}
`

export const Icons = styled.div`
	justify-content: space-between;
	align-items: center;
	align-self: center;
		display: flex;
	flex-direction: row;
	width: 400px;
	margin-top: 90px;
	@media screen and (max-width: 800px) {
		margin-top: 60px;
		width: 80vw;
		align-items: center;
	}
`

export const Git = styled(Github)`
	color: white;
	width: 60px;
	animation: 60s ${bounceAnimation};
	&:hover {
		color: black;
	}
`
export const Twit = styled(Twitter)`
	color: white;
	width: 60px;
	animation: 60s ${bounceAnimation};
	&:hover {
		color: #1da1f2;
	}
`

export const Linked = styled(LinkedinSquare)`
	color: white;
	width: 60px;
	animation: 60s ${bounceAnimation};
	&:hover {
		color: #1da1f2;
	}
`

export const Google = styled(GoogleDrive)`
	color: white;
	width: 60px;
	animation: 60s ${bounceAnimation};
	&:hover {
		color: red;
	}
`

export const Title = styled.h4`
	font-size: 20px;
	color: white;

	justify-content: center;
	margin-top: 80px;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	@media screen and (max-width: 800px) {
		font-size: 11px;
		margin-left: 25px;
	}
`
export const Introt = styled.div`
	font-size: 100px;
	margin-top: 30px;
	color: white;
	align-items: center;
	display: flex;
	flex-direction: column;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	@media screen and (max-width: 800px) {
		font-size: 40px;
		margin-top: 10px;
	}
`
export const Introf = styled.div`
	font-size: 100px;
	color: white;
	margin-top: 30px;
	align-items: center;
	display: flex;
	flex-direction: column;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	@media screen and (max-width: 800px) {
		font-size: 40px;
		margin-top: 10px;
	}
`

export const Introm = styled.div`
	font-size: 5vw;
	margin-top: 40px;
	color: white;
	align-items: center;
	display: flex;
	flex-direction: column;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	@media screen and (max-width: 800px) {
		font-size: 20px;
		margin-top: 20px;
	}
`
