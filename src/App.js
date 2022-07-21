import React, { useCallback, useRef, useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import Card from "./components/UI/Card";
import styles from "./App.module.css";

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_APP_TOKEN;

function App() {
  const weatherInputRef = useRef();
  const [dataInfo, setDataInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(
    async (e) => {
      setIsLoading(true);
      e.preventDefault();
      try {
        const response = await fetch(
          `${WEATHER_URL}/data/2.5/weather?q=${weatherInputRef.current.value}&appid=${WEATHER_TOKEN}&units=metric`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();

        const weatherData = {
          name: data.name,
          country: data.sys.country,
          temp: data.main.temp.toFixed(0),
          tempMin: data.main.temp_min.toFixed(0),
          tempMax: data.main.temp_max.toFixed(0),
          weather: data.weather[0].main,
          weatherIcon: data.weather[0].icon,
        };
        setDataInfo(weatherData);
      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    },
    [setDataInfo]
  );

  let content = (
    <p>No data yet! Type city name to search for current weather! </p>
  );

  if (Object.keys(dataInfo).length > 0)
    content = <WeatherInfo data={dataInfo} />;

  if (error) content = <p>{error} </p>;

  if (isLoading) content = <p>Loading...</p>;

  const date = (
    <p className={styles.date}>
      &copy;{new Date().getFullYear()} Aleksandra Marinović
    </p>
  );

  return (
    <div className={styles.container}>
      <Card>
        <form onSubmit={fetchWeather} className={styles.form}>
          <input type="text" ref={weatherInputRef} />
          <button>Search</button>
        </form>
        <div>{content}</div>
        {date}
      </Card>
    </div>
  );
}

export default App;
