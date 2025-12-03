import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-wbpt.onrender.com/api",
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
