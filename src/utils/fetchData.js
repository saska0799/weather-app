import { buildUrl } from "../lib/buildUrl";
import { fetchData } from "../lib/fetch";

export const fetchWeatherData = async (prognosis, city) => {
  return await fetchData(buildUrl(prognosis, city))
    .then((data) => {
      return {
        icon: data.weather[0].icon,
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
  return await fetchData(buildUrl(prognosis, city))
    .then((forecast) => {
      return forecast.list.slice(0, 8).map((el) => {
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
