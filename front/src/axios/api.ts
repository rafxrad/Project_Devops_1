import axios from "axios";

const api = axios.create({
  /* baseURL: 'https://exemplo02.onrender.com', */
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export default api;
