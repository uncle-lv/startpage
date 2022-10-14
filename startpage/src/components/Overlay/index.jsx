import React from 'react';
import { Portal } from '../Portal/index'


const Overlay = function(props) {
    const { children } = props;

    return (
        <Portal id='overlay-wrapper'>
            <div className='overlay'>{children}</div>
        </Portal>
    )
}

export { Overlay };