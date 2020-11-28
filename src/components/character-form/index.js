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
  cancelEditing,
  changeNewCharacter,
  closeForm,
  editCharacters,
  resetNewCharacter
} from "../../actions";

const CharacterForm = () => {
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.isFormOpen);
  const newCharacter = useSelector((state) => state.newCharacter);
  const isEditing = useSelector((state) => state.editCharacter.isEditing);
  const currentCharacter = useSelector(
    (state) => state.editCharacter.character
  );

  const handleChange = (e) => {
    const field = e.target.id;
    const { value } = e.target;
    dispatch(changeNewCharacter(field, value));
  };

  const handleAddCharacter = (e) => {
    e.preventDefault();
    dispatch(addCharacter({ properties: newCharacter, id: uuidv4() }));
    dispatch(resetNewCharacter());
    handleClose();
  };

  const handleEditCharacter = (e) => {
    e.preventDefault();
    dispatch(editCharacters({ properties: newCharacter, id: currentCharacter.id }));
    dispatch(resetNewCharacter());
    handleClose(); 
  }

  const handleClose = () => {
    if (isEditing) {
      dispatch(cancelEditing());
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
              value={newCharacter.name}
            />
            <TextField
              required
              id="initiative"
              onChange={handleChange}
              label="Initiative"
              type="number"
              style={{ width: "5em", margin: "1em" }}
              value={newCharacter.initiative}
            />
            <TextField
              onChange={handleChange}
              label="AC"
              id="ac"
              type="number"
              required
              style={{ width: "5em", margin: "1em" }}
              value={newCharacter.ac}
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
              value={newCharacter.maxHp}
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
