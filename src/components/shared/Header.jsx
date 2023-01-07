import { useContext } from "react";
import WeatherContext from "../../context/WeatherDataContext";

const Header = () => {
  const { state } = useContext(WeatherContext);
  const currentTime = new Date().getHours();
  const timeOfDay =
    currentTime < 7 && currentTime > 5
      ? "sunrise"
      : currentTime <= 12 && currentTime > 6
      ? "morning"
      : currentTime <= 18 && currentTime > 12
      ? "noon"
      : currentTime < 20
      ? "sunset"
      : "night";

  return (
    <>
      <div className="h-[60vh] relative">
        <img
          src={`/assets/${timeOfDay}.png`}
          className="object-cover h-[90%] w-screen"
          alt="cover"
        />
        <div className="w-[100vw] text-slate-200 flex flex-col justify-center items-center top-20 absolute">
          <p className="text-3xl">{state.currentWeatherData.weather}</p>
          <p className="text-9xl">{state.currentWeatherData.temp}°</p>
        </div>
      </div>
      <h1 className="text-center text-2xl py-10">
        {state.currentWeatherData.name}
      </h1>
    </>
  );
};

export default Header;
