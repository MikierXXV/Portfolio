import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Tecnologies from './components/Tecnologies';


function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        <Resume />
        <Skills />
        <Tecnologies />
        <Contact />
    </div>
  );
}

export default App;
