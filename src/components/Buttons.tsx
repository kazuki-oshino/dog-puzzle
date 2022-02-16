import React from "react";
import { AppButton } from "./AppButton";

type Props = {
  onClickFetchPic: () => void;
  onClickCorrect: (chooseDog: boolean) => void;
  isLoading: boolean;
};

export const Buttons: React.VFC<Props> = ({
  onClickFetchPic,
  onClickCorrect,
  isLoading,
}) => {
  return (
    <>
      <div className="container mx-auto px-96 flex justify-around m-4">
        <AppButton
          text="Dog"
          onClickButton={onClickFetchPic}
          onClickCorrectButton={onClickCorrect}
          isLoading={isLoading}
        ></AppButton>
        <p className="text-gray-200 text-xl text-center font-bold">
          Dog or Fox?
        </p>
        <AppButton
          text="Fox"
          onClickButton={onClickFetchPic}
          onClickCorrectButton={onClickCorrect}
          isLoading={isLoading}
        ></AppButton>
      </div>
    </>
  );
};
