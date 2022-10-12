import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './style/index.css';


const EngineSelect = function(props) {
    const { options } = props;

    return (
        <div>

        </div>
    )
}


const SearchBox = function(props) {
    const {  } = props;

    return (
        <div className='search-box-wrapper'>
            <div className='search-box'>
                <div className='prefix-icon' onClick={() => { console.log('click icon'); }}>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </div>
                <input type='text'></input>
                <div className='suffix-icon' onClick={() => { console.log('click search'); }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export { SearchBox };