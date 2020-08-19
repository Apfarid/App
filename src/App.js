import React, { useState } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import List from "./components/List/List";

const brands = [
  { id: 1, brand: "Land Rover" },
  { id: 2, brand: "Kia" },
  { id: 3, brand: "KTM" },
  { id: 4, brand: "Lexus" },
  { id: 5, brand: "Nissan" },
  { id: 6, brand: "Mazda" },
  { id: 7, brand: "Lancia" },
];
const App = () => {
  const [state, setState] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <ul>
          <h1>Opcions</h1>
          {brands.map((item) => (
            <Options
              key={item.id}
              item={item}
              setState={setState}
              state={state}
            />
          ))}
        </ul>

        <List items={state} setState={setState} state={state} />
      </div>
    </div>
  );
};

export default App;
