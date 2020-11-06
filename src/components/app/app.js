import React from 'react';
import './app.css'
import Header from "../header";
import CurrentWeatherData from "../current-weather-data";
import CitySearchPanel from "../city-search-panel";

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <Header/>
                <CitySearchPanel/>
                <CurrentWeatherData/>
            </div>
        </div>
    )
};

export default App;
