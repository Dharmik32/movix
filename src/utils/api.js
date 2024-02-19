import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDcyM2NhNjE2MGI5OWMyNjI1NWIyNDM1NjVmMzdiZSIsInN1YiI6IjY1YzcxMWYzYWFkOWMyMDE2NGI1ZDQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BwO11uG_1_7rTegg0NBMwQb4-6ggjqyGbdncEVyf198";
// console.log("tmdb", TMDB_TOKEN);

const headers = {
  accept: "applications/json",
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    // console.log("dataapi", data);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      // The request was made and the server responded with a status code
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    return error;
  }
};
