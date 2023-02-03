import { useContext } from "react";
import WeatherContext from "../../context/WeatherDataContext";
import ForecastListItem from "./ForecastListItem";

const ForecastList = () => {
  const { state } = useContext(WeatherContext);
  return (
    <div className="h-52 sm:w-[30%] w-screen sm:overflow-y-scroll sm:overflow-x-hidden overflow-x-scroll flex flex-row sm:flex-col">
      {state.forecastData.sort().map((el, index) => (
        <ForecastListItem key={index} el={el} />
      ))}
    </div>
  );
};

export default ForecastList;
