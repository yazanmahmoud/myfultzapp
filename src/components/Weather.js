import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
const CITY = 'Halifax'; // Or use geolocation

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
    <div style={{ fontSize: '0.9em' }}>
      🌡 {weather.main.temp}°C | {weather.weather[0].description}
    </div>
  );
};

export default Weather;
