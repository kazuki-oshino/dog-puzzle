import React, { VFC } from "react";

type Props = {
  url?: string;
};

export const Puzzle: React.VFC<Props> = ({ url }) => {
  return (
    <div className="container mx-auto px-24">
      <p className="border bg-gray-200">Puzzleやでー</p>
      <img src={url} alt="" width={300} height={300} />
    </div>
  );
};
