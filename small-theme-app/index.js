import React, { useState } from "react";
import { createContext } from "react";
import ThemeColor from "./theme-color";
import ThemeText from "./theme-text";


export const SmallTheme = createContext();

export default function ChangeColor () {
  const [color, setColor] = useState(true);
  return (
    <SmallTheme.Provider value={{ color, setColor }}>
      <div>
     Small Theme App
        <hr/>
        <ThemeColor/>
        <hr />
        <ThemeText />
      </div>
    </SmallTheme.Provider>
  );
}
