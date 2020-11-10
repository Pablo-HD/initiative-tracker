import { useState } from "react";
import "./NewCharacter.css";

const NewCharacter = ({ properties, addCharacter }) => {
  const [newCharacter, setNewCharacter] = useState(
    JSON.parse(JSON.stringify(properties))
  );

  const setCharacter = (e, field) => {
    setNewCharacter({ ...newCharacter, [field]: e.target.value });
  };

  const handleAddCharacter = () => {
    addCharacter(newCharacter);
    setNewCharacter(JSON.parse(JSON.stringify(properties)));
  };

  return (
    <div className="new-character">
      {Object.entries(newCharacter).map((property, index) => {
        return (
          <input
            onChange={(e) => setCharacter(e, property[0])}
            value={property[1]}
            name={property[0]}
            type={typeof value === "number" ? "number" : "text"}
            key={index}
          />
        );
      })}
      <button onClick={handleAddCharacter}>Add</button>
    </div>
  );
};

export default NewCharacter;
