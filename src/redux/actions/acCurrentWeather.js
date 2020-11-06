export const setCurrentWeather = (data) => {
    return {
        type: 'SET_CURRENT_WEATHER',
        payload: data
    }
}

export const setIsLoad = (value) => {
    return {
        type: 'SET_IS_LOAD',
        payload: value
    }
}

export const setError = (value) => {
    return {
        type: 'SET_ERROR',
        payload: value
    }
}


export const getCurrentWeather = (city = "Kiev") => dispatch => {
    dispatch(setIsLoad(false))
     // const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=Kiev&cnt=7&appid=11b3dfa1d2e40fc8786190fab4640d93`
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11b3dfa1d2e40fc8786190fab4640d93`
    // const url = `http://api.openweathermap.org/data/2.5/forecast?q=Kiev&appid=11b3dfa1d2e40fc8786190fab4640d93`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch(setCurrentWeather(data))
            dispatch(setIsLoad(true))
        })
        .catch(err => {
            console.log(err);
            dispatch(setError(false))
        })
}