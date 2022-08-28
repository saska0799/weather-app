import React, { useRef, useState } from "react";

import WeatherInfo from "./layouts/WeatherInfo";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import Form from "./components/form/Form";
import Input from "./components/form/Input";

import "./assets/css/main.css";

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

  return (
    <div className="container">
      <Card>
        <Form onSubmit={fetchWeather}>
          <Input type="text" ref={cityRef} placeholder="Enter location" />
          <Button>Search</Button>
        </Form>
        {!dataInfo && (
          <p>No data yet! Type in city name to search for current weather! </p>
        )}
        {Object.keys(dataInfo).length > 0 && <WeatherInfo data={dataInfo} />}
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </Card>
    </div>
  );
};

export default App;
