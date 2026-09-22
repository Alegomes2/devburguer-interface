import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem("devburguer:userData");

  if (userData) {
    const user = JSON.parse(userData);

    config.headers.authorization = `Bearer ${user.token}`;
  }

  return config;
});
