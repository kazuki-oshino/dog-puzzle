import React, { ReactNode, useEffect, useState } from "react";

type ColoredMessageProps = {
  color: string;
  fontSize: number;
  children?: ReactNode;
};

export const ColoredMessage: React.VFC<ColoredMessageProps> = ({
  color,
  fontSize,
  children,
}) => {
  const [scaleFontSize, setScaleFontSize] = useState(fontSize);
  const onClickCountButton = () => {
    setScaleFontSize((prev) => prev + 1);
  };
  const coloredStyle = {
    color,
    fontSize: scaleFontSize + "px",
  };
  // useEffect(() => {
  //     alert(`useEffect:${color}`);
  // }, [num]);
  console.log(`colored message レンダリング ${color}`);
  return (
    <>
      <button onClick={onClickCountButton}>ボタン</button>
      <p style={coloredStyle}>{scaleFontSize}</p>
    </>
  );
};
