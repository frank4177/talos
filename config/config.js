import axios from "axios";

const BASE_URL = "https://assignment-api-spxd.onrender.com/api"


export const request = axios.create({
  baseURL: BASE_URL
});