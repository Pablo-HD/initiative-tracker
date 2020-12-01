import { useState } from "react";
import { useDispatch } from "react-redux";

import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles } from "@material-ui/core/styles";

import {
  removeCharacter,
  editingForm,
  editCharacters,
  editCharacterProperties,
  openForm
} from "../../actions";

const useStyles = makeStyles({
  actions: {
    position: "absolute",
    bottom: ".2rem",
    right: ".5rem"
  }
});

const CharacterMenu = ({ character }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openOptions, setOpenOptions] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
    dispatch(editCharacterProperties(character.properties));
    dispatch(editingForm(character));
    dispatch(openForm());
  };

  return (
    <CardActions className={classes.actions}>
      <IconButton aria-label="more" size="small" onClick={handleOpenMenu}>
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
  );
};

export default CharacterMenu;
