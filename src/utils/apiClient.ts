import axios from "axios";

export const dogApiClient = axios.create(
  {
    baseURL: "https://random.dog",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  }
);

export const foxApiClient = axios.create(
  {
    baseURL: "https://randomfox.ca/",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  }
);