import React from 'react';
import './App.css';
import ColoredMessage from "./components/ColoredMessage";

const App: React.VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ColoredMessage color="red" fontSize={50} />
        <ColoredMessage color="blue" message="Dog Puzzule!" fontSize={28} />
      </header>
    </div>
  );
}

export default App;
