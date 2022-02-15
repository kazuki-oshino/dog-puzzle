import React from "react";
import { Score } from "./Score";

export const Scores: React.VFC = () => {
  return (
    <div className="container flex justify-around mx-auto px-52">
      <Score text="Time" value={30}></Score>
      <Score text="Effects" value={53}></Score>
    </div>
  );
};
