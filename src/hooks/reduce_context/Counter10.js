import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 10;
  } else if (action.type === "decrement") {
    return state - 10;
  }
};

const Counter10 = () => {
  //   const [counter, setCounter] = useState(100);
  const [counter, dispatch] = useReducer(reducer, 100);

  const incrementBy10 = () => {
    dispatch({ type: "increment" });
  };

  const decremeBy10 = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={incrementBy10}>IncrementBy 10</button>
      <button onClick={decremeBy10}>DecrementBy 10</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter10;
