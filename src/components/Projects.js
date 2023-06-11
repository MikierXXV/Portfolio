import React, {Component} from "react";
import resumeData from "../resumeData";

export default class Projects extends Component {
    render() {
        return(
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1 style={{fontSize:30}}>Check Out Some of My Works</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {resumeData.projects && resumeData.projects.map((item)=>{
                                return(
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">
                                            <a href={item.source}>
                                                <img src={`${item.imgurl}`} className="item-img"/>
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>{item.name}</h5>
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}