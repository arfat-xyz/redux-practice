import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./themSlice";

const Theme = () => {
  const [color, setColor] = useState("");
  const textColor = useSelector((state) => state.colors.color);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="textbox"
        onChange={(e) => setColor(e.target.value)}
      />
      <button className="button" onClick={() => dispatch(changeColor(color))}>
        Change text color
      </button>
      <h1 style={{ color: textColor }}>{textColor}</h1>
    </div>
  );
};

export default Theme;
