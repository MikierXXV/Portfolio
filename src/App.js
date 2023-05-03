//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from "./components/Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <About/>
        <Resume/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default App;
