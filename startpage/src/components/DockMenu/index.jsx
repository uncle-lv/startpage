import React from 'react';
import './style/index.css';

import githubIcon from './style/icon/github.svg';
import gitlabIcon from './style/icon/gitlab.svg';
import gmailIcon from './style/icon/gmail.svg';


const DockItem = function(props) {
    const { item } = props;

    return (
        <div className='dock-item' onClick={() => { item.callback(item); }}>
            <div className='item-icon' style={{
                backgroundImage: `url(${item.icon})`
            }}>
            </div>
        </div>
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