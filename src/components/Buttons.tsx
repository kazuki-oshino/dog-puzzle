import React from "react";
import { AppButton } from "./AppButton";

export const Buttons: React.VFC = () => {
  return (
    <div className="container mx-auto px-24 flex justify-around m-2">
      <AppButton text="Change"></AppButton>
      <AppButton text="Reset"></AppButton>
      <AppButton text="Start"></AppButton>
    </div>
  );
};
