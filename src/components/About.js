import React, {Component} from "react";
import resumeData from "../resumeData";

export default class About extends Component {
    render() {
        //let resumeData = this.props.resumeData;
        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img src="images/CVfoto-rounded.png" alt="porfolio pic" style={{height: 240, width: 240}} />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{resumeData.aboutme}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span><br />
                                    <span>{resumeData.address}</span><br />
                                    <span>{resumeData.website}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}