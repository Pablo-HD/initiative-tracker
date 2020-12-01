import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em .5em .1em"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    width: "5em"
  },
  subtext: {
    fontSize: ".5em",
    margin: 0
  },
  number: {
    fontSize: "1em",
    margin: 0
  },
  name: {
    textTransform: "uppercase"
  }
});

const CharacterHeader = ({ initiative, name, ac }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <Typography
          component="span"
          align="center"
          variant="h6"
          className={classes.number}
        >
          {initiative}
        </Typography>
        <Typography
          className={classes.subtext}
          align="center"
          variant="caption"
        >
          INITIATIVE
        </Typography>
      </Box>
      <Typography variant="h6" className={classes.name}>
        {name}
      </Typography>
      <Box className={classes.box}>
        <Typography
          component="span"
          align="center"
          variant="h6"
          className={classes.number}
        >
          {ac}
        </Typography>
        <Typography
          className={classes.subtext}
          align="center"
          variant="caption"
        >
          ARMOR CLASS
        </Typography>
      </Box>
    </Box>
  );
};

export default CharacterHeader;
