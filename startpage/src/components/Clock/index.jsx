import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style/index.css'


const getNowTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
};


const Clock = function(props) {

    const [ now, setNow ] = useState(getNowTime());

    const tick = () => {
        setNow(getNowTime());
    };

    useEffect(() => {
        let ticker = setInterval(tick, 20000);
        return function() {
            clearInterval(ticker);
        }
    }, [])

    return (
        <div className='clock-wrapper'>
            <div className='clock'>
                <span>{now}</span>
            </div>
        </div>
    )
}

export { Clock };