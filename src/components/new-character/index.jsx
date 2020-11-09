import { useState } from "react";

const NewCharacter = ({ properties }) => {
  const [newCharacter, setNewCharacter] = useState({character: {...properties}, reset: {...properties}});

  const handleAdd = (event) => {
    const { id, value } = event.target;
    newCharacter.character[id] = value;
    setNewCharacter({ ...newCharacter.character });
    console.log(newCharacter);
  }


  return (
    <div className="new-character">
      {Object.entries(newCharacter.character).map((property, index) => {
        return (
          <input
            onChange={handleAdd}
            type={typeof value === "number" ? "number" : "text"}
            key={index}
            id={property[0]}
            value={property[1]}
          />
        );
      })}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default NewCharacter;
