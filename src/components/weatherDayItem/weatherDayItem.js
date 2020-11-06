import React , {useEffect} from 'react'
import './weatherDayItem.css'

const WeatherDayItem  = () => {

    useEffect(() => {

        //const url = `http://api.openweathermap.org/data/2.5/forecast/hourly?q=Kiev&appid=11b3dfa1d2e40fc8786190fab4640d93`
         const url = `http://api.openweathermap.org/data/2.5/forecast?q=Try&appid=11b3dfa1d2e40fc8786190fab4640d93`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)})
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        <div className="dayItem__block">

        </div>
    )
}

export default WeatherDayItem;