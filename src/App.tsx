import React, { useState } from "react";
import "./App.css";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { StyledComponent } from "./components/StyledComponent";

export const App: React.VFC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CssModules></CssModules>
        <StyledComponent></StyledComponent>
      </header>
    </div>
  );
};
