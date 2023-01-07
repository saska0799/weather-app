import { useContext } from "react";
import WeatherContext from "../../context/WeatherDataContext";

const Form = () => {
  const { fetchData, cityRef } = useContext(WeatherContext);
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
