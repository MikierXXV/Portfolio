import React, { useEffect, useState } from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar(value) {
    const [percentage, setPercentage] = useState(0);
    let val = value.value;

    useEffect(() => {
        setTimeout(() => {
            if (percentage < val) {
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