import React from "react";
import { AppHeader } from "./AppHeader";
import { Contents } from "./Contents";

export const Home: React.VFC = () => {
  return (
    <div>
      <AppHeader></AppHeader>
      <Contents></Contents>
    </div>
  );
};
