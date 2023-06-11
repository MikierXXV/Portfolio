import React, {Component} from "react";
import resumeData from "../resumeData";
import {FaBasketballBall} from "react-icons/fa";
import {FaFilm} from "react-icons/fa";
import {FaGuitar} from "react-icons/fa";
import {GiBookshelf} from "react-icons/gi";
import {FaLaptopCode} from "react-icons/fa";

export default class About extends Component {

    render() {
        function redirectEmail() {
            window.location.href = "mailto:miguel.gutjar@gmail.com";
        }
        return(
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <h1 style={{color: "white"}}>About Me</h1>
                        <hr/>
                        <p>{resumeData.aboutme}</p>
                        <button className="download" onClick={() => { redirectEmail()}} style={{width: 225}}> Send me a Message </button>
                        <div className="space"></div>
                        <h1 style={{color: "white"}}>Hobbies</h1>
                        <hr/>
                        <p>{resumeData.roleDescription}</p>
                        <div className="penta">
                            <a href={""}><i className={"fa-3x"}><FaBasketballBall/></i></a>
                            <a href={""}><i className={"fa-3x"}><FaFilm/></i></a>
                            <a href={""}><i className={"fa-3x"}><FaGuitar/></i></a>
                            <a href={""}><i className={"fa-3x"}><GiBookshelf/></i></a>
                            <a href={""}><i className={"fa-3x"}><FaLaptopCode/></i></a>
                        </div>
                    </div>
                    <div className="three columns">
                        <img src="images/CVfoto-rounded.png" alt="porfolio pic" style={{height: 300, width: 280}} />
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span><span style={{color:"#a8379f"}}>Name:  </span>{resumeData.name}</span><br />
                            <span><span style={{color:"#a8379f"}}>Address:  </span>{resumeData.address}</span><br />
                            <span><span style={{color:"#a8379f"}}>Email:  </span>{resumeData.email}</span>
                        </p>
                    </div>
                </div>
                <br/>
            </section>
        );
    }
}