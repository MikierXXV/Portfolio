import React, {Component} from "react";

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#skills">Skills</a></li>
                            <li><a className="smoothscroll" href="#projects">Projects</a></li>
                            <li><a className="smoothscroll" href="#tecnologies">Tecnologies</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I'm Miguel.</h1>
                            <h3 style={{color:"#fff", fontFamily:"sans-serif"}}>I'am handsome</h3>
                            <hr/>
                            <ul className="social">
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle"></i>
                        </a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}