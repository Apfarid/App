import React from "react";
import "./Options.css";

const Options = ({ item, state, setState }) => {
  const add = (e) => {
    if (state.includes(e)) return;
    setState([...state, e]);
  };

  return (
    <li key={item.id} className="li">
      {item.brand}
      <button className="add" onClick={() => add(item)}>
        +
      </button>
    </li>
  );
};

export default Options;
