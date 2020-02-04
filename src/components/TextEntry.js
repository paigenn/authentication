import React from "react";

export function TextEntry(props) {

    function handleTextChange(event){
        props.changeText(event.target.value);
    }

  return (
    <div>
      <input
        type="text"
        onChange={handleTextChange}
        value={props.textValue}
      ></input>
    </div>
  );
}
