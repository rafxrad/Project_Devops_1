import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-18-188-176-8.us-east-2.compute.amazonaws.com/tasks",
  headers: { "Content-Type": "application/json" },
});

export default api;
