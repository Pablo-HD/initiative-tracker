import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/characters";
import NewCharacter from "./components/new-character";

function App() {
  const [properties, setProperties] = useState({
    initiative: 0,
    name: "",
    ac: 0,
    hp: 0
  });
  const [characters, setCharacters] = useState([]);
  const [focus, setFocus] = useState();

  const addCharacter = (character) => {
    const charactersSorted = JSON.parse(JSON.stringify(characters));
    charactersSorted.push(character);
    charactersSorted.sort(
      (a, b) => parseInt(b[0].initiative) - parseInt(a[0].initiative)
    );

    setCharacters(charactersSorted);
  };

  return (
    <div className="App">
      <h1>Initiative Tracker</h1>
      <Characters
        characters={characters}
        setCharacters={setCharacters}
        setFocus={setFocus}
        onClick={(e) => setFocus(e.target)}
      />
      <div className="properties">
        {Object.keys(properties).map((property, index) => {
          return <p key={index}>{property}</p>;
        })}
        <p></p>
      </div>
      <NewCharacter
        properties={properties}
        addCharacter={addCharacter}
        onClick={(e) => setFocus(e.target)}
      />
    </div>
  );
}

export default App;
