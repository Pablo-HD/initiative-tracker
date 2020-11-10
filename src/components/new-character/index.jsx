import { useState } from "react";
import "./NewCharacter.css";
import { v4 as uuidv4 } from "uuid";

const NewCharacter = ({ properties, addCharacter }) => {
  const [newCharacter, setNewCharacter] = useState(
    JSON.parse(JSON.stringify(properties))
  );

  const setCharacter = (e, field) => {
    e.preventDefault();
    setNewCharacter({ ...newCharacter, [field]: e.target.value });
  };

  const handleAddCharacter = (e) => {
    e.preventDefault();
    addCharacter([newCharacter, uuidv4()]);
    setNewCharacter(JSON.parse(JSON.stringify(properties)));
  };

  return (
    <form className="new-character" onSubmit={handleAddCharacter}>
      {Object.entries(newCharacter).map((property, index) => {
        return (
          <input
            onChange={(e) => setCharacter(e, property[0])}
            value={property[1]}
            name={property[0]}
            type={typeof property[1] === "number" ? "number" : "text"}
            key={index}
            required
          />
        );
      })}
      <button>Add</button>
    </form>
  );
};

export default NewCharacter;
