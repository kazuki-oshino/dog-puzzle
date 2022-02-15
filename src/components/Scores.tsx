import React, { memo } from "react";
import { Score } from "./Score";

type Props = {
  score: number;
};

export const Scores: React.VFC<Props> = memo(({ score }) => {
  return (
    <div className="container flex justify-around mx-auto px-52">
      <Score text="Score" value={score}></Score>
    </div>
  );
});
