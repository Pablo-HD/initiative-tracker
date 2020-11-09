const Character = ({ characters, editCharacter }) => {
  
  return characters.map((character) => {
    return (
      Object.keys(character).map((key,index) => <input
      type={typeof value === "number" ? "number" : "text"}
      key={index}
      onChange={editCharacter}
      name={character[key]}
      value={character[key]}
      onBlur={editCharacter}
    />)
      
    );
  });
};

export default Character;
