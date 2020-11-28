export const addCharacter = (newCharacter) => {
  return {
    type: "characters/add",
    payload: newCharacter
  };
};

export const removeCharacter = (id) => {
  return {
    type: "characters/remove",
    payload: id
  };
};

export const changeNewCharacter = (field, value) => {
  return {
    type: "newCharacter/change",
    payload: { field, value }
  };
};

export const resetNewCharacter = () => {
  return { type: "newCharacter/reset" };
};

export const editCharacter = (character) => {
  return { type: "character/edit", payload: character };
};

export const editCharacters = (character) => {
  return { type: "characters/edit", payload: character };
};

export const editCharacterProperties = (properties) => {
  return { type: "newCharacter/isEditing", payload: properties };
};

export const cancelEditing = () => {
  return { type: "character/cancelEditing" };
};

export const openForm = () => {
  return { type: "form/open" };
};

export const closeForm = () => {
  return { type: "form/close" };
};
