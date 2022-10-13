import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import './style/index.css';
import githubIcon from './style/icon/github.svg';
import gitlabIcon from './style/icon/gitlab.svg';
import gmailIcon from './style/icon/gmail.svg';
import { useState } from 'react';


const DockItem = function(props) {
    const { item } = props;

    return (
        <Tippy content={item.name} placement='bottom' arrow={false} delay={[500, null]} animation='shift-away' theme='blur'>
            <div className='dock-item' onClick={() => { item.callback(item); }}>
                <div className='item-icon' style={{
                    backgroundImage: `url(${item.icon})`
                }}>
                </div>
            </div>
        </Tippy>
    )
}


const DockMenu = function(props) {
    const {  } = props;

    let items = [
        {
            id: 'github',
            name: 'github',
            icon: githubIcon,
            callback: (item) => { console.log(item); }
        },
        {
            id: 'gitlab',
            name: 'gitlab',
            icon: gitlabIcon,
            callback: (item) => { console.log(item); }
        },
        {
            id: 'gmail',
            name: 'gmail',
            icon: gmailIcon,
            callback: (item) => { console.log(item); }
        },
    ]

    return (
        <div className='dock-wrapper'>
            {
                items.map(item => {
                    return (
                        <DockItem
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </div>
    )
}

export { DockMenu };