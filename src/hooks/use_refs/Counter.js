import React, { useRef, useState } from "react";

function Counter() {
  // userRef persists a value accross multiple renders
  // updating the useref value will not trigger component rendering
  // use useRef to connect to a DOM element
  const [count, setCount] = useState(0);

  let regularCount = 0;
  const countRef = useRef(0); // { current: 0 }

  function handleClick() {
    setCount((count) => count + 1);
  }

  function handleRegularClick() {
    regularCount += 1;
    console.log({ regularCount });
  }

  function handleRefClick() {
    countRef.current += 1;
    console.log({ countRef });
  }

  console.log({ count, regularCount, countRef }); // testing

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={handleClick}>{count}</button>
      <button onClick={handleRegularClick}>{regularCount}</button>
      <button onClick={handleRefClick}>{countRef.current}</button>
    </div>
  );
}

export default Counter;
