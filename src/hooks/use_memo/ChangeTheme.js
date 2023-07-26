// https://www.youtube.com/watch?v=THL1OPn72vo
//  Memoization is an optimization technique, to reduce the complexity of
// the application. By using memoization, we store the values that were
// calculated in the previously called subproblems. JavaScript Memoization
// mainly depends on two concepts: Closure. High order function.
import React, { useState } from "react";

const ChangeTheme = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = slowFunction(number);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((dark) => !dark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (number) => {
  console.log("Calling slow function");
  for (let i = 0; i <= 1990000000; i++) {}
  return number * 2;
};

export default ChangeTheme;
