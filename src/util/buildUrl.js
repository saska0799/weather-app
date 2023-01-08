export const buildUrl = (hostname, prognosis, city, token) => {
  return `${hostname}/data/2.5/${prognosis}?q=${city}&appid=${token}&units=metric`;
};
