import React from 'react';
import { Overlay } from '../Overlay';
import schedule from '../../assets/schedule/schedule.jpg';
import './style/index.css';


const Schedule = function(props) {

    return (
        <Overlay>
            <div className='schedule-wrapper'>
                <img className='schedule-img' src={schedule}></img>
            </div>
        </Overlay>
    )
}

export { Schedule };