import React from 'react';

// css
import './mainWidget.component.css';

// components
import RoomIcon from '@material-ui/icons/Room';
import { WiDaySunny, WiStrongWind, WiCelsius } from "weather-icons-react";

const MainWidget = () => {
    return (
        <div className='mainWidget'>
            <div className="top">
                <div className="topItem">
                    <RoomIcon />
                    <p>Skopje</p>
                </div>

                <div className="topItem">
                    <p>Thu, 4 March</p>
                </div>
            </div>

            <div className="mainWidget__main">
                <div className="left">
                    <WiDaySunny size={60} style={{ color: 'yellow' }} id='icon' />

                    <h1>5</h1><span>&#8451;</span>
                </div>

                <div className="right">
                    <div className="item">
                        <span>&#8451;</span><h4>19 / 8</h4>
                    </div>

                    <div className="item">
                        <span style={{ fontSize: '23px' }}><WiStrongWind /></span>
                        <h4>12 km/h</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWidget;
