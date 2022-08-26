import React from "react";
import "./css/WeatherInfo.css";

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;

const WeatherInfo = ({ data }) => {
  const icon = `${WEATHER_URL}/img/w/${data.weatherIcon}.png`;

  return (
    <section className="dataContainer">
      <h1 className="heading">
        {data.name}, {data.country}
      </h1>
      <div className="weatherContainer">
        <img src={icon} alt="weather icon" />
        <h2 className="temperature">{data.temp}°C</h2>
      </div>
      <h2>{data.weather}</h2>
      <div className="temperatureContainer">
        <h2>H:{data.tempMax}°</h2>
        <h2>L:{data.tempMin}°</h2>
      </div>
    </section>
  );
};

export default WeatherInfo;
