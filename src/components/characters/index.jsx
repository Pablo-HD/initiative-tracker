import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

import Character from "../character";

const Characters = () => {
  const characters = useSelector((state) => state.characters);

  return (
    <Box display="flex" justifyContent="center">
      {characters.map((character, index) => {
        return <Character character={character} key={index} />;
      })}
    </Box>
  );
};

export default Characters;
