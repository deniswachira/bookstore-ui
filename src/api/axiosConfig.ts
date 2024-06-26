import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://book-repo-api.azurewebsites.net", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
