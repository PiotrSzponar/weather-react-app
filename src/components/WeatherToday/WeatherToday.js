import React from 'react';
import WeatherImg from '../WeatherImg/WeatherImg';

import { cToF } from '../../cToF';

import style from './WeatherToday.module.css';

const WeatherToday = ({ todayInfo }) => {
  const date = new Date(todayInfo.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const type = todayInfo.type.split(/(?=[A-Z])/).join(' ');
  

  return(
  <>
    <div className={style.todayLeft}>
      <p className={style.date}>
        {date}<br />
        <span className={style.bigFirstLetter}>{type.toLowerCase()}</span>
      </p>
      <div className={style.imgTemp}>
        <WeatherImg name={todayInfo.type} />
        <h1 className={style.temp}>{cToF(todayInfo.temperature)}<sup className="muted">&deg;F</sup> <span className={style.tempC}>{todayInfo.temperature}<sup>&deg;C</sup></span></h1>
      </div>
    </div>
    <div className={style.todayRight}>
      <p className={style.dataInfo}>
      <span className="muted">Precipitation: </span>{todayInfo.precipitation}%<br />
      <span className="muted">Humidity: </span>{todayInfo.humidity}%<br />
      <span className="muted">Wind: </span>{todayInfo.windInfo.speed} mph {todayInfo.windInfo.direction}<br />
      <span className="muted">Pollen Count: </span>{todayInfo.pollenCount}
      </p>
    </div>
  </>
)}

export default WeatherToday;