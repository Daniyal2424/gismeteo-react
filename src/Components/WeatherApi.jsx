import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CSS/WeatherApi.css";

const WeatherApi = ({ id, title }) => {
  const API = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=65fc2a8a1e65ee7ecefceefffa9514e4&units=metric`;
  const [weatherApi, setWeatherApi] = useState([]);

  useEffect(() => {
    axios.get(API).then((res) => setWeatherApi(res.data.list));
  }, [API]);

  return (
    <div className="wetherApi">
      <h1>{title}</h1>
      <div className="weathers">
        {weatherApi.map((w, index) => {
          let img;
          if (w.weather[0].main === "Rain") {
            img = "https://cdn-icons-png.freepik.com/512/4150/4150897.png";
          } else if (w.weather[0].main === "Clouds") {
            img =
              "https://cdn.iconscout.com/icon/free/png-256/free-cloudy-2960374-2451828.png";
          } else if (w.weather[0].main === "Clear") {
            img =
              "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-511x512-zfj6vb21.png";
          }

          return (
            <div key={index} className="weather">
              <img src={img} alt={w.weather[0].main} />
              <h3>{w.weather[0].main}</h3>
              <p>{w.weather[0].description}</p>
              <p>{new Date(w.dt * 1000).toLocaleString()}</p>
              <p>{w.main.temp.toFixed(2)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeatherApi;

//Алматы 1526384
// Астана 1526273​
// Шымкент 1524801
