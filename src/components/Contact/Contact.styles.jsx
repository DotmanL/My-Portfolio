import styled from 'styled-components'
import contact from './contact.jpg'

export const Container = styled.div`
	height: auto;
	background-image: url(${contact});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-bottom: 10px;
	width: 100%;
`
export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-end;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid white;
	height: 65px;
	padding: 0px;
	width: 200px;
	margin: 5px 150px 0px 0px;

	@media screen and (max-width: 800px) {
		margin: 5px 80px 10px 0px;
	}
`

export const Title = styled.h4`
	font-size: 35px;
	color: white;
	font-family: 'Arvo', serif;
`

export const SubTitle = styled.h3`
	font-size: 17px;
	color: white;

	font-family: 'Arvo', serif;
`

export const FormContainer = styled.div`
	width: 40vw;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 800px) {
		width: 90vw;
	}
`

export const FormInputT = styled.textarea`
	width: 70%;
	background: white;
	border: none;
	overflow: auto;
	outline: none;
	resize: none;
	padding-top: 10px;
	color: black;

	margin-top: 15px;
	padding-left: 10px;
	font-size: 15px;
	height: 100px;
	border-radius: 5px;
	border: 1px solid #023e8a;

	@media screen and (max-width: 800px) {
		height: 100px;
	}
`

export const FormInput = styled.input`
	width: 70%;
	height: 35px;
	outline: none;
	padding-left: 10px;
	background: white;
	border-radius: 5px;
	margin-top: 15px;
	border: 1px solid #023e8a;

	@media screen and (max-width: 800px) {
	}
`
export const Button = styled.button`
	border: none;
	font-size: 24px;
	border: 2px solid #023e8a;
	margin: 20px auto;
	padding: 10px 20px;
	border-radius: 8px;
	font-weight: 700;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	color: #fff;
	text-transform: uppercase;
	font-family: 'Montserrat-SemiBold';
	-webkit-transform: perspective(1px) translateZ(0);
	transform: perspective(1px) translateZ(0);
	position: relative;
	-webkit-transition-property: color;
	transition-property: color;
	-webkit-transition-duration: 0.3s;
	transition-duration: 0.3s;

	& i {
		margin-left: 10px;
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-transition-duration: 0.1s;
		transition-duration: 0.1s;
		-webkit-transition-property: transform;
		transition-property: transform;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}

	&:before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: white;
		color: #023e8a;
		border-radius: 8px;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transform-origin: 0 50%;
		transform-origin: 0 50%;
		-webkit-transition-property: transform;
		transition-property: transform;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-timing-function: ease-out;
		transition-timing-function: ease-out;
	}

	&:hover {
		border-color: transparent;
		color: #023e8a;
	}
	&:hover:before {
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
		color: #023e8a;
	}
	&:hover i {
		-webkit-transform: translateX(4px);
		transform: translateX(4px);
	}
`

export const Footer = styled.h4`
	color: orange;
	font-size: 15px;
`

export const Footl = styled.a`
	color: white;
	font-size: 15px;
	cursor: pointer;

	:hover {
		color: orange;
	}
`
