import axios from "axios";
import { buildUrl } from "../util/buildUrl";

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_APP_TOKEN;

export const fetchWeatherData = async (prognosis, city) => {
  return await axios
    .get(buildUrl(WEATHER_URL, prognosis, city, WEATHER_TOKEN))
    .then((res) => {
      const data = res.data;
      return {
        name: data.name,
        weather: data.weather[0].main,
        temp: data.main.temp.toFixed(0),
      };
    })
    .catch((err) => {
      return;
    });
};

export const fetchForecastData = async (prognosis, city) => {
  return await axios
    .get(buildUrl(WEATHER_URL, prognosis, city, WEATHER_TOKEN))
    .then((res) => {
      return res.data.list.slice(0, 8).map((el) => {
        const icon = el.weather[0].icon;
        const time = el.dt_txt.split(/[ ,]+/)[1].split(/[ :]+/)[0];
        return {
          icon,
          time,
        };
      });
    })
    .catch((err) => {
      return;
    });
};
