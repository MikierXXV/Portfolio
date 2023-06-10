import React, {Component} from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "../ChangingProgressProvider";
import resumeData from "../resumeData";
import CircularProgressBar from "../CircularProgressBar";

export default class Skills extends Component {
    render() {
        const percentage = 66;
        return(
            <section id="skills">
                <div className="row skill">
                    <div className="two columns header-col">
                        <h1 style={{color:"white", paddingTop:50}}><span>Skills</span></h1>
                    </div>
                </div>
                <div className="row skill">
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                <div className="container" style={{ width: 150, display: 'flex', gap: '10px'}}>
                                    {resumeData.skills && resumeData.skills.map((item) => {
                                        return(
                                            <div>
                                                <CircularProgressBar value={item.level}></CircularProgressBar>
                                                <em style={{color:"white", justifyContent:"center"}}>{item.skillname}</em>
                                            </div>
                                        )
                                    })}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
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