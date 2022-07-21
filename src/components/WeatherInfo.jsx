import React from "react";
import styles from "./WeatherInfo.module.css";

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;

const WeatherInfo = ({ data }) => {
  const icon = `${WEATHER_URL}/img/w/${data.weatherIcon}.png`;

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        {data.name}, {data.country}
      </h1>
      <div className={styles.weatherContainer}>
        <img src={icon} alt="weather icon" />
        <h2 className={styles.temperature}>{data.temp}°C</h2>
      </div>
      <h2>{data.weather}</h2>
      <div className={styles.temperatureContainer}>
        <h2>H:{data.tempMax}°</h2>
        <h2>L:{data.tempMin}°</h2>
      </div>
    </section>
  );
};

export default WeatherInfo;
