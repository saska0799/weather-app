import { useContext } from "react";
import WeatherContext from "../../context/WeatherDataContext";
import ForecastListItem from "./ForecastListItem";

const ForecastList = () => {
  const { state } = useContext(WeatherContext);
  return (
    <div className="w-full lg:overflow-x-hidden overflow-x-scroll flex lg:justify-center">
      {state.forecastData.sort().map((el, index) => (
        <ForecastListItem key={index} el={el} />
      ))}
    </div>
  );
};

export default ForecastList;
