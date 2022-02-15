import { url } from "inspector";
import { useState } from "react";
import { dogApiClient, foxApiClient } from "../utils/apiClient";

type PuzzleType = {
  url: string;
  isDog: boolean;
};

type DogJsonType = {
  fileSizeBytes: number;
  url: string;
};

type FoxJsonType = {
  image: string;
  link: string;
};

export const useFetchDogPicture = () => {
  const [data, setData] = useState<PuzzleType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const onClickFetchDogOrFoxPicture = async () => {
    setIsLoading(true);
    setIsError(false);
    if (Math.floor(Math.random() * 2) === 0) {
      await dogApiClient
        .get<DogJsonType>("/woof.json", { params: { filter: "mp4,webm,gif" } })
        .then((res) => {
          setData({ url: res.data.url, isDog: true });
        })
        .catch((error) => {
          console.log("error", error);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      await foxApiClient
        .get<FoxJsonType>("/floof/")
        .then((res) => {
          setData({ url: res.data.image, isDog: false });
        })
        .catch((error) => {
          console.log("error", error);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return { data, isLoading, isError, onClickFetchDogOrFoxPicture };
};
