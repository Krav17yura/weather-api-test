const reCurrentWeather = (state = {
    currentWeather: {
        temperature: null,
        icon: null,
        city: null
    },
    currentWeatherStatus: {
        load: true,
        error: true
    }
}, action) => {
    switch (action.type){
        case 'SET_CURRENT_WEATHER':
            return{
                ...state,
                currentWeather: {
                    ...state.currentWeather,
                    temperature:Math.ceil(action.payload.main.temp  -273.15),
                    icon: action.payload.weather[0].icon,
                    city: action.payload.name
                }
            }
        case 'SET_IS_LOAD':
            return {
                ...state,
                currentWeatherStatus: {
                    ...state.currentWeatherStatus,
                    load: action.payload
                }
            }
        case 'SET_ERROR':
            return {
                ...state,
                currentWeatherStatus: {
                    ...state.currentWeatherStatus,
                    error: action.payload
                }
            }
        default:
            return state
    }
}

export default reCurrentWeather
