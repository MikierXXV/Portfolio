import React, {Component} from "react";
import 'react-circular-progressbar/dist/styles.css';
import resumeData from "../resumeData";
import CircularProgressBar from "./CircularProgressBar";

export default class Skills extends Component {
    render() {
        return(
            <section id="skills">
                <div className="row skill">
                    <div className="two columns header-col">
                        <h1 style={{color:"white", paddingTop:75}}><span>Skills</span></h1>
                    </div>
                </div>
                <div className="row skill">
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                <div className="container">
                                    {resumeData.skills && resumeData.skills.map((item) => {
                                        return(
                                            <div style={{paddingRight:20}}>
                                                <CircularProgressBar value={item.level} display={true}></CircularProgressBar>
                                                <em style={{color:"white", justifyContent:"center"}}>{item.skillname}</em>
                                            </div>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row skill">
                    <div className="two columns header-col">
                        <h1 style={{color:"white", paddingTop:50}}><span>Languages</span></h1>
                    </div>
                </div>
                <div className="row skill">
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                <div className="container">
                                    {resumeData.tecnologies && resumeData.tecnologies.map((item) => {
                                        return(
                                            <div style={{paddingRight:20}}>
                                                <CircularProgressBar value={item.level} display={false} src={item.source}></CircularProgressBar>
                                                <em style={{color:"white", justifyContent:"center"}}>{item.tecnologyname}</em>
                                            </div>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{height:80}}></div>
            </section>
        );
    }

    /*
     <ChangingProgressProvider values={[0, 60]}>
                            {percentage => (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        pathTransitionDuration: 1,
                                        pathColor: '#a8379f',
                                        textColor: '#a8379f',
                                        trailColor: '#d6d6d6',
                                    })}
                                />
                            )}
                        </ChangingProgressProvider>
    */
}