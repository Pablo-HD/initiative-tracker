import { useState } from "react";

const NewCharacter = ({ properties, addCharacter }) => {
  const [newCharacter, setNewCharacter] = useState(properties);

  const setCharacter = (e, field) => {
    setNewCharacter({ ...newCharacter, [field]: e.target.value});
  };


  return (
    <div className="new-character">
      {Object.entries(newCharacter).map((property, index) => {
        return (
          <input
            onChange={(e) => setCharacter(e, property[0])}
            value={property[1]}
            type={typeof value === "number" ? "number" : "text"}
            key={index}
          />
        );
      })}
      <button onClick={addCharacter}>Add</button>
    </div>
  );
};

export default NewCharacter;
