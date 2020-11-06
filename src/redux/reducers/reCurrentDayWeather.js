const reCurrentDayWeather = (state = {
    currentDayWeatherStatus: {
        load: true,
        error: true
    },
    data: []
}, action) => {
    switch (action.type){
        case 'SET_CURRENT_DAY_WEATHER':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_LOAD_CURRENT_DAY_WEATHER':
            return {
                ...state,
                currentDayWeatherStatus: {
                    ...state.currentDayWeatherStatus,
                    load: action.payload
                }
            }
        case 'SET_ERROR_CURRENT_DAY_WEATHER':
            return {
                ...state,
                currentDayWeatherStatus: {
                    ...state.currentDayWeatherStatus,
                    error: action.payload
                }
            }


        default :
            return  state

    }
}

export default reCurrentDayWeather;