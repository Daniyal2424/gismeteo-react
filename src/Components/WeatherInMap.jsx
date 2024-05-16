import React from "react";
import "./CSS/WeatherInMap.css";

let weathermap = [
  {
    id: 1,
    img: "https://static.gismeteo.st/assets/maps/n_prc.png",
    text: "Осадки",
  },
  {
    id: 2,
    img: "https://static.gismeteo.st/assets/maps/n_temp.png",
    text: "Температура",
  },
  {
    id: 3,
    img: "https://static.gismeteo.st/assets/maps/n_wind.png",
    text: "Ветер",
  },
  {
    id: 4,
    img: "https://static.gismeteo.st/assets/maps/n_clou.png",
    text: "Облачность",
  },
];

const WeatherInMap = () => {
  return (
    <div className="weather-maps">
      <h2>Погода на карте</h2>
      <div className="weather-in-map">
        {weathermap.map((w) => (
          <div id={w.id} className="map-card">
            <img src={w.img} alt="" />
            <p>{w.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherInMap;
