import React, { VFC } from "react";
import Resizer from "react-image-file-resizer";

type Props = {
  url?: string;
};

export const Puzzle: React.VFC<Props> = ({ url }) => {
  return (
    <div className="container mx-auto px-24">
      <img
        className="container mx-auto px-24"
        src={url}
        alt="dog puzzle"
        width={300}
        height={300}
      />
    </div>
  );
};
