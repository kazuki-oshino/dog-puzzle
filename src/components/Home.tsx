import React from "react";
import { AppHeader } from "./AppHeader";
import { Buttons } from "./Buttons";
import { Puzzle } from "./Puzzle";
import { Scores } from "./Scores";

export const Home: React.VFC = () => {
  return (
    <div>
      <AppHeader></AppHeader>
      <Scores></Scores>
      <Puzzle></Puzzle>
      <Buttons></Buttons>
    </div>
  );
};
