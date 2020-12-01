import { Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { openForm } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
    "&& h1": {
      color: "#ebdbb2",
      fontFamily: "'Patua One', cursive",
      fontSize: "3rem",
      letterSpacing: ".3em",
      marginBottom: ".5em",
      boxSizing: "border-box"
    },
    "&& button": {
      width: "12em"
    }
  }
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box className={classes.box}>
      <h1>INITIATIVE TRACKER</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(openForm())}
      >
        Add Character
      </Button>
    </Box>
  );
};

export default Header;
