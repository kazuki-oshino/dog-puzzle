import React, { VFC } from "react";
import Resizer from "react-image-file-resizer";

type Props = {
  url?: string;
};

export const Puzzle: React.VFC<Props> = ({ url }) => {
  return (
    <div className="container mx-auto px-24">
      <img
        className="container mx-auto w-2/5 h-5/6"
        src={url}
        alt="dog puzzle"
      />
    </div>
  );
};
