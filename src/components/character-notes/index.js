import { useDispatch } from "react-redux";
import { editCharacters } from "../../actions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  notes: {
    margin: "1em"
  }
});

const CharacterNotes = ({ character }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleNotes = (e) => {
    const newCharacterNotes = { ...character };
    newCharacterNotes.properties.notes = e.target.value;
    dispatch(editCharacters(newCharacterNotes));
  };

  return (
    <TextField
      className={classes.notes}
      multiline
      rows={5}
      value={character.properties.notes}
      onChange={handleNotes}
      variant="outlined"
      color="secondary"
    />
  );
};

export default CharacterNotes;
