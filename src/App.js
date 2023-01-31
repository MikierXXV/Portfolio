//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default App;
