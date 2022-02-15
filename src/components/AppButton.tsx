import React from "react";

type AppButtonProps = {
  text: string;
  isLoading: boolean;
  onClickButton: () => void;
  onClickCorrectButton: (chooseDog: boolean) => void;
};

export const AppButton: React.VFC<AppButtonProps> = ({
  text,
  isLoading,
  onClickButton,
  onClickCorrectButton,
}) => {
  return (
    <button
      className="border rounded bg-gray-200 p-1"
      onClick={() => {
        onClickButton();
        if (text === "Dog") {
          onClickCorrectButton(true);
        } else {
          onClickCorrectButton(false);
        }
      }}
      disabled={isLoading}
    >
      {text}
    </button>
  );
};
