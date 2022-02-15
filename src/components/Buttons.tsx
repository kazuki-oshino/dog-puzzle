import React from "react";
import { useFetchDogPicture } from "../hooks/useFetchDogPicture";
import { AppButton } from "./AppButton";

type Props = {
  onClickChange: () => void;
  onClickReset: () => void;
  onClickStart: () => void;
};

export const Buttons: React.VFC<Props> = ({
  onClickChange,
  onClickReset,
  onClickStart,
}) => {
  return (
    <>
      <div className="container mx-auto px-24 flex justify-around m-2">
        <AppButton text="Change" onClickButton={onClickChange}></AppButton>
        <AppButton text="Reset" onClickButton={onClickReset}></AppButton>
        <AppButton text="Start" onClickButton={onClickStart}></AppButton>
      </div>
    </>
  );
};
