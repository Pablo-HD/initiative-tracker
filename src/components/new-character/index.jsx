import { useState } from "react";

const NewCharacter = ({ properties }) => {
  const [newCharacter, setNewCharacter] = useState(properties);

  const handleAdd = (e, field) => {
    setNewCharacter({ ...newCharacter, [field]: e.target.value });
  };

  return (
    <div className="new-character">
      {Object.entries(newCharacter).map((property, index) => {
        return (
          <input
            onChange={(e) => handleAdd(e, property[0])}
            value={property[1]}
            type={typeof value === "number" ? "number" : "text"}
            key={index}
          />
        );
      })}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default NewCharacter;
