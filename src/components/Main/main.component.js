import React, { useEffect, useState } from 'react';

// data
import { weatherData } from '../../data/weather';

// css
import './main.component.css';

// components
import MainWidget from '../MainWidget/mainWidget.component';
import SmallWidget from '../SmallWidget/smallWidget.component';

const Main = () => {
    const [chosenDay, setChosenDay] = useState({});

    const filterDayObj = (test) => {
        const newDay = weatherData.days.filter(day => {
            return day.day === test
        })

        setChosenDay(newDay[0]);
    }

    useEffect(() => {
        console.log(weatherData.days)
    }, []);

    return (
        <div className='main'>
            <h1>Current day:</h1>
            <MainWidget day={chosenDay} />

            <h1>Choose days:</h1>

            <div className="days">
                {
                    weatherData.days.map(day => {
                        return <SmallWidget
                            day={day.day}
                            date={day.date}
                            type={day.type}
                            temp={day.temp}
                            lowestTemp={day.lowestTemp}
                            changeDay={filterDayObj}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Main;
