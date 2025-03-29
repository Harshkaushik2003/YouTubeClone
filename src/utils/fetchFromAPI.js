import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "f6ff3674b9mshae45856e4574932p1be57cjsn645b8b1a16e3",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  console.log("URL", url);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
