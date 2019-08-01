import React, { useEffect, useState } from 'react';

import './App.css';

import Select from './components/Select/Select';
import WeatherToday from './components/WeatherToday/WeatherToday';
import Forecast from './components/Forecast/Forecast';

const App = () => {
  const [cityId, setCityId] = useState(1);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getWeather(cityId);
  }, [cityId]);

  const getWeather = async (id) => {
    const date = new Date();
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];

    const response = await fetch(`http://dev-weather-api.azurewebsites.net/api/city/${id}/weather?date=${dateString}`);

    const data = await response.json();

    setWeather(data);
  }

  const changeCallback = id => {
    setCityId(id);
  }

  return(
    <div className="App">
      <Select idCb={changeCallback} id={cityId} />
      {weather.length && 
        <>
          <WeatherToday todayInfo={weather[0]} />
          <Forecast info={weather} />
        </>
      }
    </div>
  )
}

export default App;
