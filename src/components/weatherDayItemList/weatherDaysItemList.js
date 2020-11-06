import React from 'react'
import './weatherDaysItemList.css'
import WeatherDayItem from "../weatherDayItem";
const WeatherDaysItemList = () => {
    return(
        <div className="weatherDays__Container">
            <ul className='weatherDays__list'>
                <li><WeatherDayItem/></li>
            </ul>
        </div>
    )
};

export default WeatherDaysItemList;