import React, {Component} from "react";
import resumeData from "../resumeData";
import {FaBasketballBall, FaFilm, FaLinkedin, FaLinkedinIn, FaTelegram} from "react-icons/fa";
import{SiGmail} from "react-icons/si";

export default class Contact extends Component {
    render() {
        return(
            <footer id="contact">
                <div className="row section-head">
                    <div className="twelve columns">
                        <h1><p className="lead">Feel free to contact me for any work or suggestions below</p></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">

                            <a href={""}><i className={"fa-3x"}><FaTelegram/></i></a>
                            <a href={""}><i className={"fa-3x"}><FaLinkedin/></i></a>
                            <a href={""}><i className={"fa-3x"}><SiGmail/></i></a>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}