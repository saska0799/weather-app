import { createContext, useReducer } from "react";
import { weatherDataReducer } from "./WeatherDataReducer";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialState = {
    currentWeatherData: {},
    forecastData: {},
    error: false,
  };

  const [state, dispatch] = useReducer(weatherDataReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
