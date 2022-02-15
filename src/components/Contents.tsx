import React, { useCallback, useEffect, useState } from "react";
import { useFetchDogPicture } from "../hooks/useFetchDogPicture";
import { Buttons } from "./Buttons";
import { Puzzle } from "./Puzzle";
import { Scores } from "./Scores";

export const Contents: React.VFC = () => {
  const { data, isLoading, isError, onClickFetchDogOrFoxPicture } =
    useFetchDogPicture();
  const [score, setScore] = useState(0);
  const onClickCorrect = useCallback(
    (chooseDog: boolean) => {
      if ((data?.isDog && chooseDog) || (!data?.isDog && !chooseDog)) {
        setScore((prev) => prev + 1);
      }
    },
    [data]
  );

  useEffect(() => {
    onClickFetchDogOrFoxPicture();
  }, []);

  return (
    <>
      <Scores score={score}></Scores>
      <Puzzle url={data?.url}></Puzzle>
      <Buttons
        onClickFetchPic={onClickFetchDogOrFoxPicture}
        onClickCorrect={onClickCorrect}
        isLoading={isLoading}
      ></Buttons>
    </>
  );
};
