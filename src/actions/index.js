export const addCharacter = (characterForm) => {
  return {
    type: "ADD_CHARACTER",
    payload: characterForm
  };
};

export const removeCharacter = (character) => {
  return {
    type: "REMOVE_CHARACTER",
    payload: character
  };
};

export const editCharacters = (character) => {
  return { type: "CHANGE_CHARACTER", payload: character };
};

export const addCondition = (index, condition) => {
  return { type: "ADD_CONDITION", payload: { index, condition } };
};

export const removeCondition = (index, condition) => {
  return { type: "REMOVE_CONDITION", payload: { index, condition } };
};

export const editingForm = (character) => {
  return { type: "IS_EDITING_FORM", payload: character };
};

export const cancelEditingForm = () => {
  return { type: "IS_NOT_EDITING_FORM" };
};

export const openForm = () => {
  return { type: "OPEN_FORM" };
};

export const closeForm = () => {
  return { type: "CLOSE_FORM" };
};

export const changeNewCharacter = (field, value) => {
  return {
    type: "CHANGE_CHARACTER_FORM",
    payload: { field, value }
  };
};

export const resetNewCharacter = () => {
  return { type: "RESET_CHARACTER_FORM" };
};

export const editCharacterProperties = (properties) => {
  return { type: "EDIT_CHARACTER_PROPERTIES", payload: properties };
};
