import { useContext, useRef } from "react";
import {
  fetchForecastData,
  fetchWeatherData,
} from "../../context/WeatherDataActions";
import WeatherContext from "../../context/WeatherDataContext";

const Form = () => {
  const cityRef = useRef();
  const { dispatch } = useContext(WeatherContext);

  const fetchData = async (e) => {
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

    const weather = await fetchWeatherData("weather", cityRef.current.value);
    const forecast = await fetchForecastData("forecast", cityRef.current.value);

    if (!weather || !forecast) {
      dispatch({
        type: "SET_ERROR",
        payload:
          "Something went wrong! We weren't able to find a city you were searching for in our database. Please try serching for different one.",
      });
    } else {
      dispatch({ type: "GET_WEATHER", payload: weather });
      dispatch({ type: "GET_FORECAST", payload: forecast });
    }
  };

  return (
    <form onSubmit={fetchData}>
      <input
        type="text"
        ref={cityRef}
        placeholder="Please enter a city"
        className="rounded-full border-solid border-2 border-slate-200 p-3 mr-5 focus:outline-none"
      />
      <button className="bg-red-200 p-3 px-10 rounded-full">Search</button>
    </form>
  );
};

export default Form;
