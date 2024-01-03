import axios from "axios";

const BASE_API_URL = "http://localhost:8008/";

const instanceAxios = axios.create({
  // Configuration
  baseURL: BASE_API_URL,
  timeout: 5000,
});

export default instanceAxios;