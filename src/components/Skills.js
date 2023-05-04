import React, {Component} from "react";
import { GiBasketballBasket } from "react-icons/gi"
import resumeData from "../resumeData";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class Skills extends Component {
    render() {
        return(
            <section id="skills">
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbar value={66} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}