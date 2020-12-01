import { v4 as uuidv4 } from "uuid";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import {
  addCharacter,
  cancelEditingForm,
  changeNewCharacter,
  closeForm,
  editCharacters,
  resetNewCharacter
} from "../../actions";

const useStyles = makeStyles({
  input: {
    width: "5em",
    margin: "1em"
  },
  inputName: {
    flexGrow: 1,
    margin: "1em"
  }
});

const CharacterForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.isFormOpen);
  const characterForm = useSelector((state) => state.characterForm);
  const isEditing = useSelector((state) => state.isEditingForm.isEditing);
  const currentCharacter = useSelector(
    (state) => state.isEditingForm.character
  );

  const handleChange = (e) => {
    const field = e.target.id;
    const { value } = e.target;
    dispatch(changeNewCharacter(field, value));
  };

  const handleAddCharacter = (e) => {
    e.preventDefault();
    dispatch(addCharacter({ properties: characterForm, id: uuidv4() }));
    dispatch(resetNewCharacter());
    handleClose();
  };

  const handleEditCharacter = (e) => {
    e.preventDefault();
    dispatch(
      editCharacters({ properties: characterForm, id: currentCharacter.id })
    );
    dispatch(resetNewCharacter());
    handleClose();
  };

  const handleClose = () => {
    if (isEditing) {
      dispatch(cancelEditingForm());
    }
    dispatch(closeForm());
  };

  return (
    <div>
      <Dialog open={isFormOpen} onClose={handleClose}>
        <DialogContent>
          <Box
            component="form"
            onSubmit={isEditing ? handleEditCharacter : handleAddCharacter}
            id="new-character-form"
            display="flex"
            flexWrap="wrap"
            justifyContent="spaceAround"
          >
            <TextField
              autoFocus
              id="name"
              onChange={handleChange}
              label="Character Name"
              type="text"
              required
              value={characterForm.name}
              className={classes.inputName}
            />
            <TextField
              required
              id="initiative"
              onChange={handleChange}
              label="Initiative"
              type="number"
              value={characterForm.initiative}
              className={classes.input}
            />
            <TextField
              onChange={handleChange}
              label="AC"
              id="ac"
              type="number"
              required
              value={characterForm.ac}
              className={classes.input}
            />
            <TextField
              onChange={handleChange}
              label="Max HP"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              id="maxHp"
              min="0"
              required
              value={characterForm.maxHp}
              className={classes.input}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="new-character-form">
            {isEditing ? "Edit" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CharacterForm;
