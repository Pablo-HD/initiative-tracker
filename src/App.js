import "./App.css";
import { useState, useEffect } from "react";
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
  const [focus, setFocus] = useState();

  const addCharacter = (character) => {
    setCharacters([...characters, character]);
  };

  useEffect(() => {
    const charactersSorted = JSON.parse(JSON.stringify(characters));
    charactersSorted.sort(
      (a, b) => parseInt(b.initiative) - parseInt(a.initiative)
    );
    setCharacters(charactersSorted);
  }, [focus]);

  return (
    <div className="App" onClick={(e) => setFocus(e.target)}>
      <h1>Initiative Tracker</h1>
      <div className="properties">
        {Object.keys(properties).map((property, index) => {
          return <p key={index}>{property}</p>;
        })}
        <p></p>
      </div>
      <Characters characters={characters} setCharacters={setCharacters} />
      <NewCharacter properties={properties} addCharacter={addCharacter} />
    </div>
  );
}

export default App;
