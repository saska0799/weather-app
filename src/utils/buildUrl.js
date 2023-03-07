const WEATHER_URL = process.env.REACT_APP_WEATHER_APP_URL;
const WEATHER_TOKEN = process.env.REACT_APP_WEATHER_APP_TOKEN;

export const buildUrl = (prognosis, city) => {
  return `${WEATHER_URL}/data/2.5/${prognosis}?q=${city}&appid=${WEATHER_TOKEN}&units=metric`;
};
