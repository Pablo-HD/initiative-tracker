import characters from "./characters";
import isFormOpen from "./is-form-open";
import characterForm from "./character-form";
import isEditingForm from "./is-editing";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  characters,
  isFormOpen,
  characterForm,
  isEditingForm
});

export default allReducers;
