import React from 'react';
import { Overlay } from '../Overlay';
import schedule from '../../assets/schedule/schedule.jpg';
import './style/index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCalendar } from '../../config/api';


const Schedule = function(props) {

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        fetch(`/api/${getCalendar}`)
            .then(response => response.json())
            .then(response => {
                setImgUrl(response.data[0].img_url);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <Overlay>
            <div className='schedule-wrapper'>
                <img className='schedule-img' src={imgUrl}></img>
            </div>
        </Overlay>
    )
}

export { Schedule };