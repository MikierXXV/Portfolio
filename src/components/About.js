import React, {Component} from "react";
import resumeData from "../resumeData";

export default class About extends Component {

    render() {
        function redirectEmail() {
            window.location.href = "mailto:miguel.gutjar@gmail.com";
            //window.open("https://www.gmail.com", "_blank");
        }
        //let resumeData = this.props.resumeData;
        return(
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <h1 style={{color: "white"}}>About Me</h1>
                        <hr/>
                        <p>{resumeData.aboutme}</p>
                        <button className="download" onClick={() => { redirectEmail()}} style={{width: 225}}> Send me a Message </button>
                        <div style={{height: 40 }}></div>
                        <h1 style={{color: "white"}}>Hobbies</h1>
                        <hr/>
                        <p>{resumeData.roleDescription}</p>
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
            </section>
        );
    }
}