import React, { useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 10;
  } else if (action.type === "decrement") {
    return state - 10;
  } else if (action.type === "multiply") {
    return state * 10;
  } else if (action.type === "incrementByAny") {
    return state + action.payLoad;
  } else {
    return state;
  }
};

const Counter10 = () => {
  //   const [counter, setCounter] = useState(100);
  const [counter, dispatch] = useReducer(reducer, 100);
  const formInputRef = useRef();

  const incrementBy10 = () => {
    dispatch({ type: "increment" });
  };

  const decremeBy10 = () => {
    dispatch({ type: "decrement" });
  };

  const handleAddByAny = (e) => {
    e.preventDefault();
    const value = formInputRef.current.value;
    dispatch({ type: "incrementByAny", payLoad: parseInt(value) });
  };

  return (
    <div>
      <button onClick={incrementBy10}>IncrementBy 10</button>
      <button onClick={decremeBy10}>DecrementBy 10</button>
      <button onClick={() => dispatch({ type: "multiply" })}>
        MultiplyBy 10
      </button>
      <form onSubmit={handleAddByAny}>
        <input ref={formInputRef} type="number" />
        <input type="submit" value="Add" />
      </form>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter10;
