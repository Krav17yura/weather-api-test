import React, {Fragment} from 'react';
import './current-weather-data.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentWeather} from "../../redux/actions/acCurrentWeather";
import geolocationSwg from './location-svgrepo-com.svg'
import Loader from "../loading";
import AppError from "../error";
import WeatherDaysItemList from "../weatherDayItemList";

const CurrentWeatherData = () => {
    const dispatch = useDispatch();
    const currentTemperature = useSelector((state) => state.reCurrentWeather.currentWeather.temperature);
    const icon = useSelector((state) => state.reCurrentWeather.currentWeather.icon);
    const city = useSelector((state) => state.reCurrentWeather.currentWeather.city);
    const loader = useSelector((state) => state.reCurrentWeather.currentWeatherStatus.load);
    const error = useSelector((state) => state.reCurrentWeather.currentWeatherStatus.error);
    useEffect(() => {
        dispatch(getCurrentWeather())
    }, [])

    return (
        <div className="currentWeather">
            <div className="currentWeather__container">
                <h2 className="currentWeather__title">Current weather</h2>
                {error ? <Fragment>
                    {loader ? <div className="infoBlock">
                        {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt=""
                                      className='currentWeather__img'/>}
                        <div className="currentWeather__info">
                            <div className="currentWeather__temperature">{currentTemperature} &deg; C</div>
                            <img src={geolocationSwg} alt="" className="currentWeather__geolocationImg"/>
                            <div className="currentWeather__geolocationName">{city}</div>
                        </div>
                    </div> : <Loader/>}
                </Fragment> : <AppError/>}
                <WeatherDaysItemList/>
            </div>
        </div>
    )
};

export default CurrentWeatherData;