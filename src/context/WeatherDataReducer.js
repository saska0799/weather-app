export const weatherDataReducer = (state, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        currentWeatherData: action.payload,
      };
    case "GET_FORECAST":
      return {
        ...state,
        forecastData: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
