import React, { useState } from "react";
import "./App.css";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

export const App: React.VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CssModules></CssModules>
      </header>
    </div>
  );
};
