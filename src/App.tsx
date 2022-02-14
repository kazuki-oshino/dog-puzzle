import React, { useState } from 'react';
import './App.css';
import { ColoredMessage } from "./components/ColoredMessage";

export const App: React.VFC = () => {
  const [num, setNum] = useState(0);
  const onClickCountButton = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <ColoredMessage color="red" fontSize={50}>チルドレン渡し</ColoredMessage>
        <ColoredMessage color="Yellow" fontSize={28} />
        <button onClick={onClickCountButton}>count button</button>
        <p>{num}</p>
      </header>
    </div>
  );
}
