import React, { useRef } from "react";

function Box() {
  // Give direct access to DOM
  const elementRef = useRef();

  function handleClick() {
    const h1 = elementRef.current;
    h1.textContent = "John Doe";
    console.log("Name: ", h1);
  }

  return (
    <div>
      <h1 ref={elementRef}>Change Me</h1>
      <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default Box;
