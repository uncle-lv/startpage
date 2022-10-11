import React from 'react';
import './style/index.css';
import gitlabIcon from './style/icon/gitlab.svg';
import githubIcon from './style/icon/github.svg';
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
    const { itemList } = props;

    return (
        <div className='dock-wrapper'>
            {
                itemList.map(item => {
                    console.log(item);
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