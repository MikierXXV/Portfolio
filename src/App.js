
//import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Tecnologies from './components/Tecnologies';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Skills />
        <Tecnologies />
        <Contact />
      </div>
    );
  }
}

export default App;
