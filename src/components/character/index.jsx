import { useState } from "react";

const Character = ({ characters, editCharacter }) => {
  return characters.map((character, characterIndex) => {
    return Object.keys(character).map((key, index) => (
      <input
        type={typeof value === "number" ? "number" : "text"}
        key={index}
        onChange={editCharacter}
        name={key}
        id={`${key}-${characterIndex}`}
        value={character[key]}
        onBlur={editCharacter}
      />
    ));
  });
};

export default Character;
