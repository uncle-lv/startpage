import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-extreme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faBilibili, faPython } from '@fortawesome/free-brands-svg-icons';
import './style/index.css';
import { useState } from 'react';


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
                        <FontAwesomeIcon
                            key={option.id}
                            className='engine-icon'
                            icon={option.icon}
                            onClick={(e) => { selectEngine(option); }}
                        >
                        </FontAwesomeIcon>
                    )
                })
            }
        </div>
    )
} 


const SearchBox = function(props) {
    const {  } = props;

    let options = [
        {
            id: 'python',
            icon: faPython,
            href: 'https://www.bing.com/search?q='
        },
        {
            id: 'google',
            icon: faGoogle,
            href: 'https://www.google.com/search?q='
        },
        {
            id: 'bilibili',
            icon: faBilibili,
            href: 'https://search.bilibili.com/all?keyword='
        },
    ];

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
                        <FontAwesomeIcon icon={selectedEngine.icon}></FontAwesomeIcon>
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