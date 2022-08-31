import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Test = ({ props }) => {
  //   console.log(count);
  const [count, setCount] = useState(0);
  /*   const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  };
  const plus = () => {
    setCount(count + 1);
  };
  console.log(count); */
  return (
    <div>
      <div className="count mt-5">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)} className="ms-3 p-3">
          +
        </button>
        <button
          onClick={() => (count > 0 ? setCount(count - 1) : null)}
          className="ms-3 p-3"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Test;
