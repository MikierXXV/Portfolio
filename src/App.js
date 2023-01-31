//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//Falten imports de les altres components


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
