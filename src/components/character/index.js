import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeCharacter,
  editingForm,
  editCharacters,
  editCharacterProperties,
  openForm
} from "../../actions";

import {
  Card,
  CardActions,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  TextField
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import CharacterDescription from "../character-description";
import CharacterHeader from "../character-header";

const Character = ({ character }) => {
  const { id, properties } = character;
  const dispatch = useDispatch();

  const [openOptions, setOpenOptions] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabValue, setTabValue] = useState("info");
  const [currHp, setCurrHp] = useState(+properties.maxHp);

  const handleRemove = () => {
    handleCloseMenu();
    dispatch(removeCharacter(character));
  };

  const handleOpenMenu = (event) => {
    setOpenOptions(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenOptions(false);
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleCloseMenu();
    dispatch(editCharacterProperties(properties));
    dispatch(editingForm(character));
    dispatch(openForm());
  };

  const handleNotes = (e) => {
    const newCharacterNotes = { ...character };
    newCharacterNotes.properties.notes = e.target.value;
    dispatch(editCharacters(newCharacterNotes));
  };

  const handleTab = (e, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card className="character" id={id}>
      <CharacterHeader
        initiative={properties.initiative}
        name={properties.name}
        ac={properties.ac}
      />
      <Tabs
        value={tabValue}
        onChange={handleTab}
        aria-label="simple tabs example"
      >
        <Tab value="info" label="Info" />
        <Tab value="notes" label="Notes" />
      </Tabs>
      {tabValue === "info" && (
        <CharacterDescription
          maxHp={properties.maxHp}
          currHp={currHp}
          setCurrHp={setCurrHp}
          id={id}
          properties={properties}
        />
      )}
      {tabValue === "notes" && (
        <TextField
          multiline
          rows={5}
          value={properties.notes}
          onChange={handleNotes}
          variant="outlined"
          color="secondary"
        />
      )}
      <CardActions>
        <IconButton aria-label="more" onClick={handleOpenMenu}>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={openOptions}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handleRemove}>Remove</MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
};

export default Character;
