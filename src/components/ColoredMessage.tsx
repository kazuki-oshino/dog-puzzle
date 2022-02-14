import React, { ReactNode, useEffect, useState } from "react";

type ColoredMessageProps = {
    color: string
    fontSize: number
    children?: ReactNode
};

export const ColoredMessage: React.VFC<ColoredMessageProps> = ({ color, fontSize, children }) => {
    const [num, setNum] = useState(0);
    const onClickCountButton = () => {
        setNum((prev) => prev + 1);
    };
    const coloredStyle = {
        color,
        fontSize: fontSize + "px",
    };
    // useEffect(() => {
    //     alert(`useEffect:${color}`);
    // }, [num]);
    console.log(`colored message レンダリング ${color}`);
    return (
        <>
            <button onClick={onClickCountButton}>ボタン</button>
            <p>{num}</p>
        </>
    );
}
