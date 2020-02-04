import React, { useState } from "react";

export function Card(props) {
  const [color, setColor] = useState("blue");
  const [colors, setColors] = useState([
    "red",
    "pink",
    "purple",
    "green",
    "yellow",
    "black",
    "white"
  ]);
  const [colorIndex, setColorIndex] = useState(0);

  function changeColor() {
    setColorIndex(colorIndex+1);
    setColor(colors[colors.length % colorIndex]);
  }

  return (
    <div style={{ backgroundColor: props.color, height: "300px", width: "300px" }}>
      {props.text}
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}
