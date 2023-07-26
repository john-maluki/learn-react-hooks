//https://www.youtube.com/watch?v=_AyFP5s69N4
import React, { useCallback, useState } from "react";
import NumberList from "./NumberList";

const ChangeThemeNumber = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getNumbers = () => {
    return [number, number + 1, number + 2];
  };

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((dark) => !dark)}>Change Theme</button>
      <NumberList getNumbers={getNumbers} />
    </div>
  );
};

export default ChangeThemeNumber;
