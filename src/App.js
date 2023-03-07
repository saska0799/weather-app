import { useContext } from "react";
import Card from "./components/shared/Card";
import Form from "./components/shared/Form";
import ForecastList from "./components/ForecastList/ForecastList";
import WeatherContext from "./context/WeatherDataContext";
import Header from "./components/ui/Header";

const App = () => {
  const { state } = useContext(WeatherContext);
  return (
    <main className="flex flex-col items-center">
      <Header />
      <section className="flex flex-col sm:items-start items-center md:mt-10 mt-24 sm:mb-24">
        <Form />
        {state.error && <p className="mt-20 w-60">{state.error}</p>}
        {!state.error &&
          Object.keys(state.currentWeatherData).length > 0 &&
          Object.keys(state.forecastData).length > 0 && (
            <div className="flex sm:flex-row flex-col items-center mt-10 md:mb-10 mb-0">
              <Card />
              <ForecastList />
            </div>
          )}
      </section>
    </main>
  );
};

export default App;
