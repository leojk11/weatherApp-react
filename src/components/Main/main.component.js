import React, { useEffect, useState } from 'react';

// data
import { weatherData } from '../../data/weather';

// css
import './main.component.css';

// components
import MainWidget from '../MainWidget/mainWidget.component';
import SmallWidget from '../SmallWidget/smallWidget.component';

const Main = () => {
    useEffect(() => {
        console.log(weatherData.days)
    }, []);

    return (
        <div className='main'>
            <MainWidget />

            <h1 style={{ color: 'gray' }}>Other days:</h1>

            <div className="days">
                {
                    weatherData.days.map(day => {
                        return <SmallWidget
                            day={day.day}
                            date={day.date}
                            type={day.type}
                            temp={day.temp}
                            lowestTemp={day.lowestTemp}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Main;
