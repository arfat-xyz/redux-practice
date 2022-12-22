import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => setcount(count + 1)}
      >
        {" "}
        +{" "}
      </button>
      <span className="value">Count: {count}</span>
      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => setcount(count - 1)}
      >
        {" "}
        -{" "}
      </button>
    </>
  );
};

export default Counter;
