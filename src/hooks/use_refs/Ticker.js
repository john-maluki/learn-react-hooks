import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

// when the price goes up, display font in green
// when the price goes down, display font in red

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  const prevPriceRef = useRef(price);

  useEffect(() => {
    const prevPrice = prevPriceRef.current;

    console.log({ price, prevPrice });

    if (price > prevPrice) {
      setColor("green");
    } else if (price < prevPrice) {
      setColor("red");
    } else {
      setColor("black");
    }

    prevPriceRef.current = price;
  }, [price]);

  useEffect(() => {
    // every 1 second, generate a new random price
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
