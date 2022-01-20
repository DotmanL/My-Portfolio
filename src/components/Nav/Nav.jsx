import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavbarLinks from './NavbarLinks'
import './Nav.css'

const Navigation = styled.nav`
	height: 70px;
	display: flex;
	flex-direction: row;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	padding: 0 30px;
	margin: 0px;
	z-index: 19;
	@media (max-width: 800px) {
		height: 70px;
		padding: 5px 20px 5px 20px;
		z-index: 999;
	}
`

const Toggle = styled.div`
	display: none;
	cursor: pointer;
	@media (max-width: 800px) {
		display: flex;
	}
`
const Logo = styled.p`
	color: white;
	font-size: 25px;
	margin-top: 29px;
	/* font-family: 'Niconne', cursive; */
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	cursor: pointer;
	margin-left: 40px;

	:hover {
		color: goldenrod;
	}
	@media (max-width: 800px) {
		font-size: 20px;
		margin-top: 20px;
		margin-left: 5px;
	}
`

const Navbox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	color: #f1faee;
	align-items: center;
	@media (max-width: 800px) {
		flex-direction: column;
		background: #023e8a;
		position: fixed;
		opacity: 0.9;
		width: 100%;
		z-index: 20;
		justify-content: flex-start;
		padding-top: 10vh;
		transition: all 0.3s ease-in;
		top: 0vh;
		right: ${(props) => (props.open ? '-100%' : '0')};
	}
`

const Hamburger = styled.div`
	background-color: #f1faee;
	width: 30px;
	height: 3px;
	transition: all 0.3s linear;
	align-self: center;
	position: relative;
	z-index: 90;
	transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};
	::before,
	::after {
		width: 30px;
		height: 3px;
		background-color: #f1faee;
		content: '';
		position: absolute;
		transition: all 0.3s linear;
	}
	::before {
		transform: ${(props) => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
		top: -10px;
	}
	::after {
		opacity: ${(props) => (props.open ? '0' : '1')};
		transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
		top: 10px;
	}
`
const Nav = () => {
	const [scrolledDownEnough, setScrolledDownEnough] = useState(false)
	const [navbarOpen, setNavbarOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop

			const scrolledDownEnough = bodyScrollTop > 30 ? true : false
			setScrolledDownEnough(scrolledDownEnough)
		}

		// Nav.handleOnClickOutside = () =>  setNavbarOpen(false)
		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => window.removeEventListener('scroll', handleScroll)
	}, [scrolledDownEnough])

	const newNav = scrolledDownEnough ? 'nav-background' : ''

	return (
		<Navigation className={newNav}>
			<Logo>Oladotun Lawal</Logo>
			<Toggle navbarOpen={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
				{navbarOpen ? <Hamburger open /> : <Hamburger />}
			</Toggle>
			{navbarOpen ? (
				<Navbox onClick={() => setNavbarOpen(false)}>
					<NavbarLinks />
				</Navbox>
			) : (
				<Navbox open>
					<NavbarLinks />
				</Navbox>
			)}
		</Navigation>
	)
}

export default Nav
