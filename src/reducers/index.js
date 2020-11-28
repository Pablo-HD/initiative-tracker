import characters from "./characters";
import isFormOpen from "./is-form-open";
import newCharacter from "./new-character";
import editCharacter from "./edit-character";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  characters,
  isFormOpen,
  newCharacter,
  editCharacter
});

export default allReducers;
