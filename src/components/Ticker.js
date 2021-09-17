import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  const prevPrice = useRef(price);

  useEffect(() => {
    const id = setInterval(() => {
      setPrice(makeRandomNumber);
    }, 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    setColor(price > prevPrice.current ? "green" : price === prevPrice.current ? "black" : "red");
    prevPrice.current = price;
  }, [price]);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
