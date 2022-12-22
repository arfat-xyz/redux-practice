import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const textColor = useSelector((state) => state.colors.color);
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
      <button
        className="button"
        onClick={() => dispatch(incrementByAmount(10))}
        style={{ color: textColor }}
      >
        Increment by 10
      </button>
    </>
  );
};

export default Counter;
