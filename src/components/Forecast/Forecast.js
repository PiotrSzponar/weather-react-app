import React from 'react';

import ForecastList from './ForecastList';

import style from './Forecast.module.css';

const Forecast = ({ info }) => {
  return(
    <div className={style.Forecast}>
      {info.map(fc => (<ForecastList info={fc} key={fc.date} />))}
    </div>
)}

export default Forecast;