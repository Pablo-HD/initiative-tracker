import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import Character from "../character";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

const Characters = () => {
  const classes = useStyles();
  const characters = useSelector((state) => state.characters);

  return (
    <Box className={classes.box}>
      {characters.map((character, index) => {
        return <Character character={character} key={index} />;
      })}
    </Box>
  );
};

export default Characters;
