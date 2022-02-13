import React from 'react';
import './App.css';
import ColoredMessage from "./components/ColoredMessage";

const App: React.VFC = () => {
  const onClickButton = () => {
    alert('たらちゃん');
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClickButton} style={{ color: "red" }}>button</button>
        <ColoredMessage color="red" fontSize={123} />
        {/* <ColoredMessage />
        <ColoredMessage />
        <ColoredMessage /> */}
      </header>
    </div>
  );
}

export default App;
