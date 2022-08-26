import React, { useRef, useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Card from "./global/Card";
import "./css/App.css";

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_APP_TOKEN;

const App = () => {
  const cityRef = useRef();
  const [dataInfo, setDataInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${WEATHER_URL}/data/2.5/weather?q=${cityRef.current.value}&appid=${WEATHER_TOKEN}&units=metric`
      );

      if (cityRef.current.value === "") {
        cityRef.current.focus();
        throw new Error(
          "Please type in the search field before trying to get data."
        );
      }

      if (!response.ok) {
        throw new Error(
          "Something went wrong! We weren't able to find a city you were searching for in our database. Please try serching for different one."
        );
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
    cityRef.current.value = "";
  };

  let content = (
    <p>No data yet! Type in city name to search for current weather! </p>
  );

  if (Object.keys(dataInfo).length > 0)
    content = <WeatherInfo data={dataInfo} />;

  if (error) content = <p>{error} </p>;

  if (isLoading) content = <p>Loading...</p>;

  const date = (
    <p className="date">
      &copy;{new Date().getFullYear()} Aleksandra Marinović
    </p>
  );

  return (
    <div className="container">
      <Card>
        <form onSubmit={fetchWeather} className="form">
          <input type="text" ref={cityRef} />
          <button>Search</button>
        </form>
        <div>{content}</div>
        {date}
      </Card>
    </div>
  );
};

export default App;
