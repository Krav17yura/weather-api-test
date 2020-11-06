import React, {Fragment, useEffect} from 'react'
import './weatherDaysItemList.css'
import WeatherDayItem from "../weatherDayItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentDayWeather} from "../../redux/actions/acCurrentDayWeather";
import Loader from "../loading";
import AppError from "../error";


const WeatherDaysItemList = () => {
    const data = useSelector((state) => state.reCurrentDayWeather.data)
    const {error, load} = useSelector(({reCurrentDayWeather}) => reCurrentDayWeather.currentDayWeatherStatus)


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentDayWeather())
    }, [])

    return (
        <div className="weatherDays__Container">
            {error ?
                <Fragment>
                    {load ?
                        <ul className='weatherDays__list'>
                            <li>{data && data.map(obj =>
                                <WeatherDayItem
                                    key={ obj.dt}
                                    time={obj.dt_txt}
                                    icon={obj.weather[0].icon}
                                    temperatura={Math.ceil(obj.main.temp - 273.15)}
                                    wind = {obj.wind}
                                    {...obj}/>
                            )}</li>
                        </ul> : <Loader/>}

                </Fragment> : <AppError/>}
        </div>
    )
};

export default WeatherDaysItemList;