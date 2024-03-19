import axios from "axios";

import { env } from './env'

const auth = axios.create({
  baseURL: "https://accounts.spotify.com",
  headers: {
    Authorization: `Basic ${btoa(
      `${env.VITE_CLIENT}:${env.VITE_CLIENT_SECRET}`
    )}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },

});

export { auth };
