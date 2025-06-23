import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '379aae74750f67c28545cbb79d4aff6a'; 
const CITY = 'Halifax'; 

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
    ).then(res => {
      setWeather(res.data);
    }).catch(err => {
      console.error("Weather fetch failed:", err);
    });
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div style={{ fontSize: '1.5em', marginRight: '25px'}}>
      🌡 {weather.main.temp}°C 
    </div>
  );
};

export default Weather;
