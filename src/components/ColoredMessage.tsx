import React from "react";

type ColoredMessageProps = {
    color: string
    message?: string
    fontSize: number
};

const ColoredMessage: React.VFC<ColoredMessageProps> = ({ color, message, fontSize }) => {
    const pinkStyle = {
        color: color,
        fontSize: fontSize + "px",
    };
    return <p style={pinkStyle}>{message ?? "鬼"}</p>
}

export default ColoredMessage;
