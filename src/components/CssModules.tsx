import React from "react";
import classes from "./CssModules.module.scss";

export const CssModules: React.VFC = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>css modules</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
};
