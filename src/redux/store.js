import thunk from "redux-thunk";
import reCurrentWeather from './reducers/reCurrentWeather'
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

const reducers = combineReducers({
    reCurrentWeather
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store