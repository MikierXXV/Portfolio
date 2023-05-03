import React, {Component} from "react";
import { GiBasketballBasket } from "react-icons/gi"
import resumeData from "../resumeData";

export default class Skills extends Component {
    render() {
        return(
            <section id="skills">
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>{resumeData.skillsDescription}</p>
                        <div className="bars">
                            <ul className="skills">{
                                resumeData.skills && resumeData.skills.map((item) => {
                                    return(
                                        <li>
                                            <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
                                            <em>{item.skillname}</em>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}