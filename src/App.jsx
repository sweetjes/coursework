import React, { useCallback, useState } from "react";
import "./styles.css";
import useDeleteEl from "./useDeleteEl.jsx";
import Chip from "./components/Chip";

export default function App() {
  const [state, setItems] = useState([
    "Angular",
    "jQuery",
    "Polymer",
    "React",
    "Vue.js",
  ]);
  const handleClick = (i) => {
    const array = [...state];
    setItems(useDeleteEl(array, i));
  };
  /* const del = (i) => {
    setState((prev) => {
      return prev.filter((value, index) => index !== i);
    });
  
  }; */
  return (
    <div className="chip">
      {state.map((item, index) => (
        <Chip date={item} index={index} handleClick={handleClick} key={index} />
      ))}
    </div>
  );
}
