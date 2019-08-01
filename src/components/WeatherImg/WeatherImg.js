import React from 'react';

import style from './WeatherImg.module.css';

import RainAndCloudy from '../../assets/rain_s_cloudy.png';
import PartlyCloudy from '../../assets/partly_cloudy.png';
import Cloudy from '../../assets/cloudy.png';
import RainLight from '../../assets/rain_light.png';
import Sunny from '../../assets/sunny.png';

const WeatherImg = ({ name }) => {
    const img = { RainAndCloudy, PartlyCloudy, Cloudy, RainLight, Sunny }

    return(
        <img className={style.img} src={img[name]} alt={name} />
    )
}

export default WeatherImg;