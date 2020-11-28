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

  if (action.type === "characters/add") {
    newCharacterList
      .push(action.payload)
      .sort(
        (a, b) =>
          parseInt(b.properties.initiative) - parseInt(a.properties.initiative)
      );
  } else if (action.type === "characters/editProperties") {
    newCharacterList[index] = action.payload;
  } else if (action.type === "characters/addCondition") {
    newCharacterList[action.payload.index].properties.conditions.push(
      action.payload.condition
    );
  } else if (action.type === "characters/removeCondition") {
    const conditionIndex = newCharacterList[
      action.payload.index
    ].properties.conditions.findIndex(
      (con) => con === action.payload.condition
    );
    newCharacterList[action.payload.index].properties.conditions.splice(
      conditionIndex,
      1
    );
  } else if (action.type === "characters/remove") {
    newCharacterList.splice(index, 1);
  } else {
    return state;
  }

  window.localStorage.setItem("characters", JSON.stringify(newCharacterList));
  return newCharacterList;
};

export default characters;
