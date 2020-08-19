import React from "react";
import Item from "./Item";
import "./List.css";

const List = ({ items, setState }) => {
  const clean = () => {
    setState([]);
  };
  return (
    <div className="list">
      <div className="bottom">
        <h1 className="title">List</h1>

        <button className="button" onClick={clean}>
          Reset
        </button>
      </div>

      <ol>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ol>
    </div>
  );
};

export default List;
