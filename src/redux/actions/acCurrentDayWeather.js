import moment from "moment";


export const fetchCurrentDayWeather = (city = "Kiev") => dispatch => {
    dispatch(setLoadCurrentDayWeather(false))

    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=11b3dfa1d2e40fc8786190fab4640d93`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let currentData = moment().format('YYYY-MM-DD');
            let mass = data.list.filter(item => moment(currentData).isSame(moment(item.dt_txt).format('YYYY-MM-DD'), 'day'));
            dispatch(setCurrentDayWeather(mass))
            dispatch(setErrorCurrentDayWeather(true))
            dispatch(setLoadCurrentDayWeather(true))
        })
        .catch(err => {
            console.log(err)
            dispatch(setErrorCurrentDayWeather(false))
        })
}

export const setCurrentDayWeather = (data) => {
    return {
        type: 'SET_CURRENT_DAY_WEATHER',
        payload: data
    }
}

export const setLoadCurrentDayWeather = (value) => {
    return {
        type: 'SET_LOAD_CURRENT_DAY_WEATHER',
        payload: value
    }
}

export const setErrorCurrentDayWeather = (value) => {
    return {
        type: 'SET_ERROR_CURRENT_DAY_WEATHER',
        payload: value
    }
}