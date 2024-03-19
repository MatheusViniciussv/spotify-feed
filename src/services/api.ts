import axios from "axios";

const accessToken = localStorage.getItem("@spotify-feed-token");

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});


export { api };
