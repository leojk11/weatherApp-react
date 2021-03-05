import React, { useEffect, useState } from 'react';

// css
import './smallWidget.component.css';

// components
import { 
    WiDaySunny, 
    WiDaySunnyOvercast, 
    WiCloudy, 
    WiNightAltCloudy,
    WiRainMix
} from "weather-icons-react";


const SmallWidget = ({ day, date, type, temp, lowestTemp, changeDay }) => {
    const [sunny, setSunny] = useState(false);
    const [rainy, setRainy] = useState(false);
    const [cloudy, setCloudy] = useState(false);

    const handleClick = () => {
        changeDay(day);
    }

    useEffect(() => {
        if(type === 'sunny') {
            setSunny(true);
        } else if(type === 'rainy') {
            setRainy(true);
        } else if(type === 'cloudy') {
            setCloudy(true);
        }
    }, []);

    return (
        <div id='leo zver' className='smallWidget' onClick={handleClick}>
            <div className="date">
                <h3>{day}, {date}</h3>
            </div>

            { sunny ? 
                <div className="weather">
                    <WiDaySunny size={30} />
                    <WiDaySunnyOvercast size={30} />
                </div>
            : null }

            { rainy ? 
                <div className="weather">
                    <WiRainMix size={30} />
                    <WiRainMix size={30} />
                </div>
            : null }

            { cloudy ? 
                <div className="weather">
                    <WiCloudy size={30} />
                    <WiNightAltCloudy size={30} />
                </div>
            : null }

            <div className="temp">
                <h3>{temp} / {lowestTemp}</h3>
                <p>&#8451;</p>
            </div>
        </div>
    )
}

export default SmallWidget;
