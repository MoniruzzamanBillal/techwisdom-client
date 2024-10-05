import envConfig from "@/config/envConfig";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
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
