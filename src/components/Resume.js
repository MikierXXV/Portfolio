import React, {Component} from "react";
import resumeData from "../resumeData";
export default class Resume extends Component {
    render() {
        return(
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                        <br/>
                        <img src={"images/fib-upc_logo.png"} height={100} width={100}/>
                        <br/>
                        <img src={"images/garbi_logo.png"} height={120} width={120}/>
                    </div>
                    <div className="nine columns main-col" style={{paddingTop:80}}>{
                        resumeData.education && resumeData.education.map((item)=>{
                            return(
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{item.UniversityName}</h3>
                                        <p className="info">{item.specialization}
                                            <span>&bull;</span>
                                            <em className="date">{item.datefrom}</em>
                                        </p>
                                        <p>{item.Achievements}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                        <img src={"images/upc_net_logo.png"} height={200} width={200}/>
                        <br/>
                        <img src={"images/etseib_logo.png"} height={70} width={70}/>
                        <br/>
                        <br/>
                        <img src={"images/coyma-logo.png"} height={120} width={120}/>
                    </div>
                    <div className="nine columns main-col" style={{paddingTop:140}}>{
                        resumeData.work && resumeData.work.map((item) => {
                            return(
                                <div className="row item">
                                    <div className="twelve columns">
                                        <h3>{item.CompanyName}</h3>
                                        <p className="info">{item.description}
                                            <span>&bull;</span>
                                            <em className="date">{item.datefrom}</em>
                                        </p>
                                        <p>{item.Achievements}</p>
                                    </div>
                                </div>)
                        })
                    }
                    </div>
                </div>
            </section>
        );
    }
}