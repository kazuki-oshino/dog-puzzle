import React from "react";
import { useFetchDogPicture } from "../hooks/useFetchDogPicture";
import { Buttons } from "./Buttons";
import { Puzzle } from "./Puzzle";
import { Scores } from "./Scores";

export const Contents: React.VFC = () => {
  const { data, isLoading, isError, onClickFetchDogPicture } =
    useFetchDogPicture();
  const onClickReset = () => {
    alert("reset");
  };
  const onClickStart = () => {
    alert("start");
  };
  return (
    <>
      <Scores></Scores>
      <Puzzle></Puzzle>
      <Buttons
        onClickChange={onClickFetchDogPicture}
        onClickReset={onClickReset}
        onClickStart={onClickStart}
      ></Buttons>
    </>
  );
};
