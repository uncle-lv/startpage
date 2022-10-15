import React from 'react';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './style/index.css';


const EngineSelect = function(props) {
    const { options, onSwitch } = props;

    const selectEngine = (option) => {
        onSwitch(option);
    }

    return (
        <div className='engine-select-wrapper'>
            {
                options.map(option => {
                    return (
                        <img
                            key={option.id}
                            className='engine-icon'
                            src={option.icon}
                            onClick={(e) => { selectEngine(option); }}
                        >
                        </img>
                    )
                })
            }
        </div>
    )
} 


const SearchBox = function(props) {
    const { options } = props;

    const [selectedEngine, setSelectedEngine] = useState(options[0]);

    const switchEngine = (engine) => {
        if (engine.id !== selectedEngine.id) {
            setSelectedEngine(engine);
        }
    };

    const [keyword, setKeyword] = useState('');

    const keywordChange = (e) => {
        setKeyword(e.target.value);
    }

    const search = (keyword) => {
        if (keyword === '') {
            return;
          }
    
        window.open(selectedEngine.href+keyword);
    }

    return (
        <div className='search-box-wrapper'>
            <div className='search-box'>
                <Tippy
                    content={
                        <EngineSelect
                            options={options}
                            onSwitch={switchEngine}>
                        </EngineSelect>}
                    allowHTML={true} interactive={true}
                    trigger='click' placement='bottom'
                    arrow={false}
                    theme='blur'
                    animation='scale-extreme'>
                    <div className='prefix-icon'>
                        <img src={selectedEngine.icon}></img>
                    </div>
                </Tippy>
                <input
                    type='text'
                    value={keyword}
                    onChange={keywordChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            search(keyword);
                        }
                    }}></input>
                <div
                    className='suffix-icon'
                    onClick={(e) => { search(keyword); }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}

export { SearchBox };