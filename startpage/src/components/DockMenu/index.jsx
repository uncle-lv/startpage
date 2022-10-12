import React from 'react';
import './style/index.css';


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
    const { items } = props;

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