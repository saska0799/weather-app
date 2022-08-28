import { GoLocation } from "react-icons/go";
import "../assets/css/main.css";

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;

const time = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const date = new Date().toLocaleDateString([], {
  weekday: "short",
  month: "long",
  day: "numeric",
});

const WeatherInfo = ({ data }) => {
  const icon = `${WEATHER_URL}/img/w/${data.weatherIcon}.png`;

  return (
    <section className="locationContainer">
      <h1>
        <GoLocation />
        {data.name}, {data.country}
      </h1>
      <div className="timeContainer">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className="weatherContainer">
        <img src={icon} alt="weather icon" />
        <h2>{data.temp}°C</h2>
      </div>
      <div className="temperatureContainer">
        <h2>
          H:{data.tempMax}°/ L:{data.tempMin}°
        </h2>
      </div>
      <h2>{data.weather}</h2>
    </section>
  );
};

export default WeatherInfo;
