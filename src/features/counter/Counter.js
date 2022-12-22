import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="button"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        {" "}
        +{" "}
      </button>
      <span className="value">Count: {count}</span>
      <button
        className="button"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        {" "}
        -{" "}
      </button>
    </>
  );
};

export default Counter;
