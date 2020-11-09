import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Characters from "./components/characters";
import NewCharacter from "./components/new-character";

function App() {
  const [properties, setProperties] = useState({
    initiative: 0,
    name: "",
    hp: 0,
    ac: 0,
    notes: ""
  });
  const [characters, setCharacters] = useState([]);

  return (
    <div className="App">
      <h1>Initiative Tracker</h1>
      <div className="properties">
        {Object.keys(properties).map((property, index) => {
          return <p key={index}>{property}</p>;
        })}
      </div>
      <NewCharacter properties={properties} />
    </div>
  );
}

export default App;
