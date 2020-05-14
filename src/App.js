import React from 'react';
import './App.css';
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Nav/>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
