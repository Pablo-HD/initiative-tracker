import { Box, IconButton, Chip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useDispatch, useSelector } from "react-redux";
import { addCondition, removeCondition } from "../../actions";

import conditions from "../../conditions";

const CharacterDescription = ({ currHp, setCurrHp, maxHp, id, properties }) => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const characterIndex = characters.findIndex((char) => char.id === id);

  const handleHp = (operation) => {
    setCurrHp(operation === "add" ? currHp + 1 : currHp - 1);
    console.log(currHp);
  };

  const handleChip = (e) => {
    const hasCondition = properties.conditions.includes(e.target.innerText);
    if (hasCondition) {
      dispatch(removeCondition(characterIndex, e.target.innerText));
    } else {
      dispatch(addCondition(characterIndex, e.target.innerText));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
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
        <span>&nbsp;/ {maxHp}</span>
        <IconButton onClick={() => handleHp("add")}>
          <AddIcon />
        </IconButton>
      </div>
      <p style={{ fontSize: ".6rem", marginTop: -6 }}>HIT POINTS</p>
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
              color={
                properties.conditions.includes(condition)
                  ? "secondary"
                  : "default"
              }
              style={{ margin: "1px" }}
            />
          );
        })}
      </div>
    </Box>
  );
};

export default CharacterDescription;
