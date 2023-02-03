import { useContext } from "react";
import Card from "./components/shared/Card";
import Form from "./components/shared/Form";
import ForecastList from "./components/ForecastList/ForecastList";
import WeatherContext from "./context/WeatherDataContext";

const App = () => {
  const { state } = useContext(WeatherContext);
  return (
    <main className="flex h-screen flex-col items-center">
      <header className="w-full text-center">
        <h1 className="bg-pink-500 lg:text-8xl md:text-6xl text-4xl text-zinc-50 pt-24">
          Weather App
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1420 320">
          <path
            fill="#ec4899"
            fillOpacity="1"
            d="M0,192L24,208C48,224,96,256,144,266.7C192,277,240,267,288,250.7C336,235,384,213,432,202.7C480,192,528,192,576,213.3C624,235,672,277,720,256C768,235,816,149,864,149.3C912,149,960,235,1008,256C1056,277,1104,235,1152,218.7C1200,203,1248,213,1296,218.7C1344,224,1392,224,1416,224L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </header>
      <section className="flex flex-col sm:items-start items-center md:mt-10 mt-24">
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
