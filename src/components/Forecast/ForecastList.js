import React from 'react';

import { cToF } from '../../cToF';

import WeatherImg from '../WeatherImg/WeatherImg';
import style from './ForecastList.module.css';

const ForecastList = ({ info }) => {
    const dayName = new Date(info.date).toLocaleDateString('en-US', { weekday: 'long' });

    return(
    <div className={style.listItem}>
        <h2 className={style.title}>{dayName}</h2>
        <WeatherImg name={info.type} />
        <h3 className={style.temp}>{cToF(info.temperature)}<sup>&deg;F</sup> <span className="muted">{info.temperature}<sup>&deg;C</sup></span></h3>
        <p className={style.pollen}>Pollen: {info.pollenCount}</p>
    </div>
)}

export default ForecastList;