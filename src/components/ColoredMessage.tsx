import React, { ReactNode } from "react";

type ColoredMessageProps = {
    color: string
    fontSize: number
    children?: ReactNode
};

const ColoredMessage: React.VFC<ColoredMessageProps> = ({ color, fontSize, children }) => {
    const coloredStyle = {
        color,
        fontSize: fontSize + "px",
    };
    return <p style={coloredStyle}>{children ?? "undefined"}</p>
}

export default ColoredMessage;
