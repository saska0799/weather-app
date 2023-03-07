import { useContext } from "react";

import WeatherContext from "../../context/WeatherDataContext";

const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;

const Card = () => {
  const { state } = useContext(WeatherContext);

  return (
    <article className="flex md:w-[80%] justify-center items-center bg-[#FAF8F1] rounded-xl px-10 md:py-0 py-10 drop-shadow-lg">
      <img
        src={`${WEATHER_URL}/img/w/${state.currentWeatherData.icon}.png`}
        alt="weather icon"
        className="md:h-48 md:w-48 h-24 w-24 mr-10"
      />
      <div className="text-slate-800 flex flex-col justify-center items-center">
        <p className="text-6xl text-[#667d72]">
          {state.currentWeatherData.temp}°
        </p>
        <p className="text-3xl text-[#667d72]">
          {state.currentWeatherData.weather}
        </p>
        <h2 className="text-center text-2xl text-[#ECA869]">
          {state.currentWeatherData.name}
        </h2>
      </div>
    </article>
  );
};

export default Card;
