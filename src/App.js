import { useContext } from "react";
import Header from "./components/shared/Header";
import Form from "./components/shared/Form";
import ForecastList from "./components/ForecastList/ForecastList";
import WeatherContext from "./context/WeatherDataContext";

const App = () => {
  const { state } = useContext(WeatherContext);
  return (
    <>
      {!state.error &&
      Object.keys(state.currentWeatherData).length > 0 &&
      Object.keys(state.forecastData).length > 0 ? (
        <>
          <Header />
          <ForecastList />
        </>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center header">
          <h1 className="lg:text-8xl text-6xl mb-20 text-white">Weather App</h1>
          <Form />
          {state.error && <p className="mt-20 w-60">{state.error}</p>}
        </div>
      )}
    </>
  );
};

export default App;
