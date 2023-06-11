import React, { useEffect, useState } from 'react';
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar(value, display) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < value.value) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);

    return (
        <div style={{textAlign:"center"}}>
            <div style={{ width: 150}}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
                    pathTransitionDuration: 1,
                    pathColor: '#a8379f',
                    textColor: '#a8379f',
                    trailColor: '#d6d6d6',
                })} />
            </div>
        </div>
    );
}
export default CircularProgressBar;

/*
<div style={{textAlign:"center"}}>
            <div style={{ width: 150}}>
                <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
                    pathTransitionDuration: 1,
                    pathColor: '#a8379f',
                    textColor: '#a8379f',
                    trailColor: '#d6d6d6',
                })} >
                <img
                    style={{ width: 80, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                />
                </CircularProgressbarWithChildren>
            </div>
        </div>
*/