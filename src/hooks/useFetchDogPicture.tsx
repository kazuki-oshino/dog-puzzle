import { useState } from "react";
import { apiClient } from "../utils/apiClient";

type DogJsonType = {
  fileSizeBytes: number;
  url: string;
};

export const useFetchDogPicture = () => {
  const [data, setData] = useState<DogJsonType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const onClickFetchDogPicture = async () => {
    setIsLoading(true);
    setIsError(false);
    await apiClient
      .get<DogJsonType>("/woof.json", { params: { filter: "mp4,webm" } })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("error", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { data, isLoading, isError, onClickFetchDogPicture };
};
