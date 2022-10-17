import React from 'react';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
import toast from 'react-hot-toast';
import { spaceInfo } from '../../util/api';
import { liveRoomLink } from '../../config/constant';
import './style/index.css';
import eggAvatar from '../../assets/icon/egg.svg';


const DockItem = function (props) {
    const { option, activeOpt, activeOptChange } = props;

    const isActive = () => {
        return option.id === activeOpt;
    }

    return (
        <Tippy content={option.name} placement='bottom' arrow={false} delay={[500, null]} animation='shift-away' theme='blur'>
            <div
                className={isActive() ? 'dock-item-active' : 'dock-item'}
                onClick={(e) => { activeOptChange(option); }}
            >
                <div className='item-icon' style={{
                    backgroundImage: `url(${option.icon})`,
                }}>
                </div>
            </div>
        </Tippy>
    )
};

const LiveRoom = function (props) {
    const { } = props;

    const [liveStatus, setLiveStatus] = useState(0);

    const isLive = () => {
        if (liveStatus === 0) {
            return false;
        }
        return true;
    }

    const updateLiveStatus = () => {
        fetch(`/bili/${spaceInfo}`, {
            method: 'GET',
            mode: 'no-cors'
        })
            .then(response => response.json())
            .then(response => {
                let statusCode = response.data.live_room.liveStatus;
                if (statusCode !== liveStatus) {
                    setLiveStatus(statusCode);
                    if (statusCode === 1) {
                        toast('爱哥开播啦！', {
                            icon: '🎉'
                        })
                    }

                    if (statusCode === 0) {
                        toast('爱哥下播啦！', {
                            icon: '😭'
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        updateLiveStatus();
        let ticker = setInterval(updateLiveStatus, 30000);
        return function() {
            clearInterval(ticker);
        }
    }, [])

    return (
        <>
            <Tippy content={isLive() ? '正在直播' : '未开播'} placement='bottom' arrow={false} delay={[500, null]} animation='shift-away' theme='blur'>
                <div className='dock-item' onClick={(e) => { window.open(liveRoomLink); }}>
                    <div className='item-icon' style={{
                        backgroundImage: `url(${eggAvatar})`,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '8px',
                        position: 'relative',
                    }}>
                        <div className={isLive() ? 'status-on' : 'status-off'}></div>
                    </div>
                </div>
            </Tippy>
        </>
    )
}


const DockMenu = function (props) {
    const { options } = props;

    const [activeOpt, setActiveOpt] = useState('');

    const activeOptChange = (option) => {
        if (activeOpt === option.id) {
            setActiveOpt('');
            return;
        }
        setActiveOpt(option.id);
    };

    return (
        <div className='dock-wrapper'>
            {
                options.map(item => {
                    return (
                        <DockItem
                            key={item.id}
                            option={item}
                            activeOpt={activeOpt}
                            activeOptChange={activeOptChange}
                        />
                    )
                })
            }
            <div className='divider'></div>
            <LiveRoom></LiveRoom>
        </div>
    )
}

export { DockMenu };