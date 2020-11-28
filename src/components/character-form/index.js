import { v4 as uuidv4 } from "uuid";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Box
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  addCharacter,
  cancelEditingForm,
  changeNewCharacter,
  closeForm,
  editCharacters,
  resetNewCharacter
} from "../../actions";

const CharacterForm = () => {
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
              style={{ flexGrow: 1, margin: "1em" }}
              value={characterForm.name}
            />
            <TextField
              required
              id="initiative"
              onChange={handleChange}
              label="Initiative"
              type="number"
              style={{ width: "5em", margin: "1em" }}
              value={characterForm.initiative}
            />
            <TextField
              onChange={handleChange}
              label="AC"
              id="ac"
              type="number"
              required
              style={{ width: "5em", margin: "1em" }}
              value={characterForm.ac}
            />
            <TextField
              onChange={handleChange}
              label="Max HP"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              id="maxHp"
              style={{ width: "5em", margin: "1em" }}
              min="0"
              required
              value={characterForm.maxHp}
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
