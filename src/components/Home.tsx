import React from "react";
import { AppHeader } from "./AppHeader";
import { Scores } from "./Scores";

export const Home: React.VFC = () => {
  return (
    <div>
      <AppHeader></AppHeader>
      <Scores></Scores>
    </div>
  );
};
