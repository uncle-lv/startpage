import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faBilibili, faPython } from '@fortawesome/free-brands-svg-icons';
import './style/index.css';


const EngineSelect = function(props) {
    const { options } = props;

    return (
        <div className='engine-select-wrapper'>
            <FontAwesomeIcon className='engine-icon' icon={faGoogle}></FontAwesomeIcon>
            <FontAwesomeIcon className='engine-icon' icon={faBilibili}></FontAwesomeIcon>
            <FontAwesomeIcon className='engine-icon' icon={faPython}></FontAwesomeIcon>
        </div>
    )
} 


const SearchBox = function(props) {
    const {  } = props;

    return (
        <div className='search-box-wrapper'>
            <div className='search-box'>
                <Tippy content={<EngineSelect></EngineSelect>} allowHTML={true} trigger='click' placement='bottom' arrow={false} theme='blur' animation='scale-extreme'>
                    <div className='prefix-icon' onClick={() => { console.log('click icon'); }}>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </div>
                </Tippy>
                <input type='text'></input>
                <div className='suffix-icon' onClick={() => { console.log('click search'); }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export { SearchBox };