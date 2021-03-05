import React, { useEffect, useState } from 'react';

// css
import './mainWidget.component.css';

// components
import RoomIcon from '@material-ui/icons/Room';
import { WiDaySunny, WiStrongWind, WiRainMix, WiCloud } from "weather-icons-react";

const MainWidget = ({ day }) => {
    const [chosenDay, setChosenDay] = useState('');
    const [date, setDate] = useState('');
    const [maxTemp, setMaxTemp] = useState('');
    const [lowTemp, setLowTemp] = useState('');
    const [windDir, setWindDir] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [airq, setAirq] = useState('');
    const [airqT, setAirqT] = useState(false);

    const [sunny, setSunny] = useState(false);
    const [cloudy, setCloudy] = useState(true);
    const [rainy, setRainy] = useState(false);

    const [northwest, setNorthwest] = useState(false);
    const [northeast, setNortheast] = useState(false);
    const [southeast, setSoutheast] = useState(true);

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    useEffect(() => {
        if(isEmpty(day) === true) {
            setChosenDay('Today');
            setDate('1 Jan');
            setMaxTemp('5');
            setLowTemp('-4');
            setWindDir('southwest');
            setWindSpeed('2');
            setAirq('bad');
        } else {
            setChosenDay(day.day);
            setDate(day.date);
            setMaxTemp(day.temp);
            setLowTemp(day.lowestTemp);
            setWindDir(day.windDirection);
            setWindSpeed(day.windSpeed);
            setAirq(day.airQuality);

            if(day.windDirection === 'north-east') {
                setNortheast(true);

                setNorthwest(false);
                setSoutheast(false);
            } else if(day.windDirection === 'north-west') {
                setNorthwest(true);

                setNortheast(false);
                setSoutheast(false);
            } else if(day.windDirection === 'south-east') {
                setSoutheast(true);

                setNortheast(false);
                setNorthwest(false);
            }

            if(day.type === 'sunny') {
                setSunny(true);

                setRainy(false);
                setCloudy(false);
            } else if(day.type === 'rainy') {
                setRainy(true);

                setCloudy(false);
                setSunny(false);
            } else if(day.type === 'cloudy') {
                setCloudy(true);

                setSunny(false);
                setRainy(false);
            }

            
        }

        if(day.airQuality === 'good') {
            setAirqT(true);
        } else {
            setAirqT(false);
        }
    }, [day]);

    return (
        <div className='mainWidget'>
            <div className="top">
                <div className="top__wrapper">
                    <div className="topItem">
                        <RoomIcon />
                        <p>Skopje</p>
                    </div>

                    <div className="topItem">
                        <p>{chosenDay}, {date}</p>
                    </div>
                </div>
                
                <div className="right">
                    <p style={{ textAlign: 'right', fontSize: '11px', color: 'gray' }}>Max. temp.</p>

                    <div className="right__wrapper">
                        { sunny ? <WiDaySunny size={60} style={{ color: 'yellow' }} id='icon' /> : null }
                        { rainy ?  <WiRainMix size={60} id='swing' /> : null }
                        { cloudy ? <WiCloud size={60} id='swing' /> : null }

                        <h1>{maxTemp}</h1><span>&#8451;</span>
                    </div>
                </div>
            </div>

            <div className="mainWidget__main">
                <div className="right">
                    <div className="item">
                        <span style={{ fontSize: '23px' }}>
                            { northeast ? <img src='/northeast.png' alt='' style={{ filter: 'invert(100%)', width: '20px' }} /> : null }
                            { northwest ? <img src='/northwest.png' alt='' style={{ filter: 'invert(100%)', width: '20px' }} /> : null }
                            { southeast ? <img src='/southeast.png' alt='' style={{ filter: 'invert(100%)', width: '20px' }} /> : null }
                        </span>
                        <h4>Wind direction: {windDir}</h4>
                    </div>

                    <div className="item">
                        <span><img src="/air-quality.png" alt="" style={{ filter: 'invert(100%)', width: '20px' }}/> </span>
                        <h4>Air quality:<span style={ airqT ? { color: 'green' } : { color: 'red' } }>{airq}</span></h4>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <span>&#8451;</span><h4>{maxTemp} / {lowTemp}</h4>
                    </div>

                    <div className="item">
                        <span style={{ fontSize: '23px' }}><WiStrongWind /></span>
                        <h4>{windSpeed} m/s</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWidget;
