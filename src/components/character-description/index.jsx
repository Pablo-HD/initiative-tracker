import { useState } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CharacterDescription = ({ maxHp }) => {
  const [currHp, setCurrHp] = useState(+maxHp);

  const handleHp = (operation) => {
    setCurrHp(operation === "add" ? currHp + 1 : currHp - 1);
    console.log(currHp);
  };

  return (
    <div className="character-description">
      <IconButton onClick={() => handleHp("subtract")}>
        <RemoveIcon />
      </IconButton>
      <span>{currHp}</span>
      <span> / {maxHp}</span>
      <IconButton onClick={() => handleHp("add")}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default CharacterDescription;
