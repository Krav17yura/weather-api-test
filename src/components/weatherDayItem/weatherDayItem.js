import React from 'react'
import moment from "moment";
import './weatherDayItem.css'

const WeatherDayItem  = ({icon, temperatura, wind, time}) => {


    return(
        <div className="dayItem__block">
           <div className="dayItem__time dayItem__text">{moment(time).format('HH:mm')}</div>
            <img src= {`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="dayItem__img"/>
            <div className="dayItem__temperature dayItem__text">{temperatura} &deg; C</div>
            <div className="dayItem__wind dayItem__text">{wind.speed} m/s</div>
        </div>
    )
}

export default WeatherDayItem;