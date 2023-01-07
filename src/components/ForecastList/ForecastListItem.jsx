const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;

const ForecastListItem = ({ el }) => {
  return (
    <div className="p-5 mx-2 mx-5 flex flex-col justify-center items-center">
      <p className="pb-2">{el.time}h</p>
      <img
        src={`${WEATHER_URL}/img/w/${el.icon}.png`}
        width={80}
        height={80}
        alt="icon"
        className="max-w-none"
      />
    </div>
  );
};

export default ForecastListItem;
