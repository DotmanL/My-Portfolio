import React from 'react'
//import './App.css';
import { GlobalStyle } from './global.styles'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { ToastContainer } from 'react-toastify'
import { Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const styles = {
	marginTop: '80px',
}

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<ToastContainer style={styles} closeOnClick transition={Zoom} />
			<Nav />
			<Intro />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}

export default App
