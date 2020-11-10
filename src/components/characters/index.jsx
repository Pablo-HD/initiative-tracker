import { useState } from "react";

const Characters = ({ characters, editCharacter, setCharacters }) => {
  const newList = [...characters];

  const changeCharacter = (e) => {
    const { name, id, value } = e.target;
    newList[id.split("-")[1]][name] = value;
    setCharacters(newList);
  };

  return (
    <div className="characters">
      {characters.map((character, characterIndex) => {
        return (
          <div className="character">
            {Object.keys(character).map((key, index) => (
              <input
                type={typeof value === "number" ? "number" : "text"}
                key={index}
                onChange={changeCharacter}
                name={key}
                id={`${key}-${characterIndex}`}
                value={character[key]}
                onBlur={() => editCharacter(newList)}
              />
            ))}
            <button>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
