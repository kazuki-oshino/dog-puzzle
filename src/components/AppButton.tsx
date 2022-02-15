import React from "react";

type AppButtonProps = {
  text: string;
};

export const AppButton: React.VFC<AppButtonProps> = ({ text }) => {
  return <button className="border rounded bg-gray-200 p-1">{text}</button>;
};
