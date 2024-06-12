import axios from "axios";

// axios'u herherde çağırmak yerine function oluşturuyoruz
const api = axios.create({
  baseURL: "http://localhost:7071",
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor ekliyoruz
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
