import React from "react";

type ScoreProps = {
  text: string;
  value: number;
};

export const Score: React.VFC<ScoreProps> = ({ text, value }) => {
  return (
    <p className="text-gray-300 text-xl p-2">
      {text}:{value}
    </p>
  );
};
