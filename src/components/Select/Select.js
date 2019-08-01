import React, { useEffect, useState } from 'react';

import style from './Select.module.css';

const Select = ({ idCb, id }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCitiesList();
  }, []);

  const getCitiesList = async () => {
  const response = await fetch('http://dev-weather-api.azurewebsites.net/api/city');

  const data = await response.json();

  setCities(data);
  }

  const handleChange = e => {
    idCb(e.target.value);
  }

  return(
    <div className={style.Select}>
      <select className={style.selectCity} value={id} onChange={handleChange}>
        {cities.length ? (
        cities.map(city => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))
        ) : (
        <option disabled>Loading...</option>
        )}
      </select>
    </div>
  )
}

export default Select;