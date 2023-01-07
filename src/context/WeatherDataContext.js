import { createContext, useRef, useReducer } from "react";
import axios from "axios";
import { weatherDataReducer } from "./WeatherDataReducer";

const WeatherContext = createContext();

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_APP_TOKEN;

export const WeatherProvider = ({ children }) => {
  const cityRef = useRef();

  const initialState = {
    currentWeatherData: {},
    forecastData: {},
    error: false,
  };

  const [state, dispatch] = useReducer(weatherDataReducer, initialState);

  const fetchData = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_ERROR",
      payload: false,
    });

    if (!cityRef.current.value) {
      cityRef.current.focus();
      dispatch({
        type: "SET_ERROR",
        payload: "Please type in the search field before trying to get data.",
      });
      return;
    }

    fetchWeatherData();
    fetchForecastData();
  };

  const fetchWeatherData = async () => {
    return await axios
      .get(
        `${WEATHER_URL}/data/2.5/weather?q=${cityRef.current.value}&appid=${WEATHER_TOKEN}&units=metric`
      )
      .then((res) => {
        const data = res.data;
        const weatherData = {
          name: data.name,
          weather: data.weather[0].main,
          temp: data.main.temp.toFixed(0),
        };
        dispatch({ type: "GET_WEATHER", payload: weatherData });
      })
      .catch((err) => {
        dispatch({
          type: "SET_ERROR",
          payload:
            "Something went wrong! We weren't able to find a city you were searching for in our database. Please try serching for different one.",
        });
      });
  };

  const fetchForecastData = async () => {
    return await axios
      .get(
        `${WEATHER_URL}/data/2.5/forecast?q=${cityRef.current.value}&appid=${WEATHER_TOKEN}&units=metric`
      )
      .then((res) => {
        const forecast = res.data.list.slice(0, 8).map((el) => {
          const icon = el.weather[0].icon;
          const time = el.dt_txt.split(/[ ,]+/)[1].split(/[ :]+/)[0];
          return {
            icon,
            time,
          };
        });
        dispatch({ type: "GET_FORECAST", payload: forecast });
      })
      .catch((err) => {
        return;
      });
  };

  return (
    <WeatherContext.Provider value={{ cityRef, fetchData, state }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
