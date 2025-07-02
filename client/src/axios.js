import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
if (!BASE_URL && import.meta.env.MODE !== "development") {
  console.warn("VITE_API_URL is not defined in production!");
}

const instance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : `${BASE_URL}/api`,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
