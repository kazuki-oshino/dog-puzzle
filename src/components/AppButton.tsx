import React, { Dispatch } from "react";
import { useFetchDogPicture } from "../hooks/useFetchDogPicture";

type AppButtonProps = {
  text: string;
  onClickButton: () => void;
};

export const AppButton: React.VFC<AppButtonProps> = ({
  text,
  onClickButton,
}) => {
  return (
    <button className="border rounded bg-gray-200 p-1" onClick={onClickButton}>
      {text}
    </button>
  );
};
