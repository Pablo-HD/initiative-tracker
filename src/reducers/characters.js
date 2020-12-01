const localList = [];
if (window.localStorage.getItem("characters") === null) {
  window.localStorage.setItem("characters", JSON.stringify([]));
} else {
  localList.push(...JSON.parse(window.localStorage.getItem("characters")));
}

const characters = (state = localList, action) => {
  const newCharacterList = [...state];
  const index = action.payload
    ? newCharacterList.findIndex(
        (character) => character.id === action.payload.id
      )
    : -1;

  switch (action.type) {
    case "ADD_CHARACTER":
      newCharacterList.push(action.payload);
      newCharacterList.sort(
        (a, b) =>
          parseInt(b.properties.initiative) - parseInt(a.properties.initiative)
      );
      break;
    case "CHANGE_CHARACTER":
      newCharacterList[index] = action.payload;
      newCharacterList.sort(
        (a, b) =>
          parseInt(b.properties.initiative) - parseInt(a.properties.initiative)
      );
      break;
    case "ADD_CONDITION":
      newCharacterList[action.payload.index].properties.conditions.push(
        action.payload.condition
      );
      break;
    case "REMOVE_CONDITION":
      const conditionIndex = newCharacterList[
        action.payload.index
      ].properties.conditions.findIndex(
        (con) => con === action.payload.condition
      );
      newCharacterList[action.payload.index].properties.conditions.splice(
        conditionIndex,
        1
      );
      break;
    case "REMOVE_CHARACTER":
      newCharacterList.splice(index, 1);
      break;
    default:
      return state;
  }

  window.localStorage.setItem("characters", JSON.stringify(newCharacterList));
  return newCharacterList;
};

export default characters;
