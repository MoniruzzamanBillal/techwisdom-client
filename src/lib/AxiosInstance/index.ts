import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: envConfig.baseApi,
  baseURL: "http://localhost:5000",
  // baseURL: "https://techwisdom-server.vercel.app",
});

// ! Add a request interceptor
// axiosInstance.interceptors.request.use(
//   function (config) {
//     const storedToken = localStorage.getItem("token");

//     if (storedToken) {
//       config.headers.Authorization = `Bearer ${storedToken}`;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
