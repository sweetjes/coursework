import React, { useCallback, useState } from "react";
import "./styles.css";
import useDeleteEl from "./useDeleteEl.jsx";

export default function Chip() {
  const [state, setState] = useState(['Angular','jQuery','Polymer','React','Vue.js']);
  const handleClick = (i) => {
  const array = [...state];
  setState(useDeleteEl(array, i));
  };
 /* const del = (i) => {
    setState((prev) => {
      return prev.filter((value, index) => index !== i);
    });
  
  }; */
  
  return (
    <div className="chip">
      {state.map((date, i) => (
        <div className="chip-chips" key={i}>
          {date}
          <button className="Button" onClick={() => handleClick(i)}>&times;</button>
        </div>
      ))}
    </div>
  );
}
