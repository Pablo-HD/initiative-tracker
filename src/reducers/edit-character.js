const editCharacter = (state = { isEditing: false, character: null }, action) => {
  switch (action.type) {
    case "character/edit":
      return { isEditing: true, character: action.payload };
    case "character/cancelEditing":
      return { isEditing: false, character: null };
    default:
      return state;
  }
}

export default editCharacter;
