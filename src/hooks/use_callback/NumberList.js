import React, { useEffect, useState } from "react";

const NumberList = ({ getNumbers }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(getNumbers());
    console.log("Updating numbers");
  }, [getNumbers]);
  return numbers.map((number, index) => <div key={index}>{number}</div>);
};

export default NumberList;
