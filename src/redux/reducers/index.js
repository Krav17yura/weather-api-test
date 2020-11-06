import reCurrentDayWeather from "./reCurrentDayWeather";
import reCurrentWeather from "./reCurrentWeather";
import { combineReducers } from "redux";

const reducers = combineReducers({
    reCurrentWeather,
    reCurrentDayWeather
})

export default reducers;