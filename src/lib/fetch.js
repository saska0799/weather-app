import axios from "axios";

export const fetchData = async (url) => {
  return await axios(url).then((res) => res.data);
};
