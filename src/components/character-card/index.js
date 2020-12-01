import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#504945",
    display: "flex",
    flexDirection: "column",
    margin: "2rem",
    width: "20rem",
    height: "20rem",
    position: "relative"
  }
});

const CharacterCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {children}
    </Card>
  );
};

export default CharacterCard;
