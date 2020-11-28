const characters = (state = [], action) => {
  switch (action.type) {
    case "characters/add":
      const sorted = [...state, action.payload].sort(
        (a, b) =>
          parseInt(b.properties.initiative) - parseInt(a.properties.initiative)
      );
      return sorted;
    case "characters/edit":
      const editIndex = state.findIndex(
        (character) => character.id === action.payload.id
      );
      const editedCharacterList = [...state];
      editedCharacterList[editIndex] = action.payload;
      console.log(editedCharacterList);
      return editedCharacterList;
    case "characters/remove":
      const removeIndex = state.findIndex(
        (character) => character.id === action.payload
      );
      const newCharacterList = [...state];
      newCharacterList.splice(removeIndex, 1);
      return newCharacterList;
    default:
      return state;
  }
};

export default characters;
