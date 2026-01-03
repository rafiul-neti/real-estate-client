import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2000",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
