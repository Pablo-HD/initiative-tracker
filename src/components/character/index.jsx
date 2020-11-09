import { useState } from "react";

const Character = ({ characters, editCharacter, setCharacters}) => {

  const newList = [...characters]
  console.log(newList)
  console.log(characters)

  const changeCharacter = (e) => {
    const { name, id, value } = e.target;
    newList[id.split("-")[1]][name] = value;
    setCharacters(newList)
  };

  return characters.sort((a, b) => parseInt(b.initiative) - parseInt(a.initiative)).map((character, characterIndex) => {
    return (
      <div>
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
      </div>
    );
  });
};

export default Character;
