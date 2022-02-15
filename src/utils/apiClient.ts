import axios from "axios";

export const apiClient = axios.create(
  {
    baseURL: "https://random.dog",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  }
);
