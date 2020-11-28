import { IconButton, Chip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useDispatch, useSelector } from "react-redux";
import { addCondition, removeCondition } from "../../actions";

const conditions = [
  "Blinded",
  "Charmed",
  "Deafened",
  "Frightened",
  "Grappled",
  "Incapacitated",
  "Invisible",
  "Paralyzed",
  "Petrified",
  "Poisoned",
  "Prone",
  "Restrained",
  "Stunned",
  "Unconscious"
];

const CharacterDescription = ({ currHp, setCurrHp, maxHp, id, properties }) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const characterIndex = characters.findIndex((char) => char.id === id);

  const handleHp = (operation) => {
    setCurrHp(operation === "add" ? currHp + 1 : currHp - 1);
    console.log(currHp);
  };

  const handleChip = (e) => {
    const hasCondition = properties.conditions.includes(
      e.target.innerText
    );
    if (hasCondition) {
      dispatch(removeCondition(characterIndex, e.target.innerText));
    } else {
      dispatch(addCondition(characterIndex, e.target.innerText));
    }
  };

  return (
    <>
      <div
        className="character-description"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "300px"
        }}
      >
        <IconButton onClick={() => handleHp("subtract")}>
          <RemoveIcon />
        </IconButton>
        <span>{currHp}</span>
        <span> / {maxHp}</span>
        <IconButton onClick={() => handleHp("add")}>
          <AddIcon />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "300px"
        }}
      >
        {conditions.map((condition, index) => {
          return (
            <Chip
              onClick={handleChip}
              size="small"
              label={condition}
              key={index}
              color={properties.conditions.includes(condition) ? "secondary" : "default"}
            />
          );
        })}
      </div>
    </>
  );
};

export default CharacterDescription;
