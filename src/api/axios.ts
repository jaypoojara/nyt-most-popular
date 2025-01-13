import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosRequestConfig: AxiosRequestConfig = {
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
};

// this block of code configure the user management api base url using axios
const nytAxiosInstance: AxiosInstance = axios.create({
  ...axiosRequestConfig,

  baseURL: "https://api.nytimes.com/svc",
});

export { nytAxiosInstance };
