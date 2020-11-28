const localList = [];
if (window.localStorage.getItem("characters") === null) {
  window.localStorage.setItem("characters", JSON.stringify([]));
} else {
  localList.push(...JSON.parse(window.localStorage.getItem("characters")));
}

const characters = (state = localList, action) => {
  const newCharacterList = [...state];
  switch (action.type) {
    case "characters/add":
      const sorted = [...state, action.payload].sort(
        (a, b) =>
          parseInt(b.properties.initiative) - parseInt(a.properties.initiative)
      );
      window.localStorage.setItem("characters", JSON.stringify(sorted));
      return sorted;

    case "characters/editProperties":
      const index = state.findIndex(
        (character) => character.id === action.payload.id
      );
      newCharacterList[index] = action.payload;
      window.localStorage.setItem(
        "characters",
        JSON.stringify(newCharacterList)
      );
      return newCharacterList;

    case "characters/addCondition":
      newCharacterList[action.payload.index].properties.conditions = [
        ...newCharacterList[action.payload.index].properties.conditions,
        action.payload.condition
      ];
      window.localStorage.setItem(
        "characters",
        JSON.stringify(newCharacterList)
      );
      console.log(newCharacterList);
      return newCharacterList;

    case "characters/removeCondition":
      const conditionIndex = newCharacterList[
        action.payload.index
      ].properties.conditions.findIndex(
        (con) => con === action.payload.condition
      );
      newCharacterList[action.payload.index].properties.conditions.splice(
        conditionIndex,
        1
      );
      window.localStorage.setItem(
        "characters",
        JSON.stringify(newCharacterList)
      );
      console.log(newCharacterList);
      return newCharacterList;

    case "characters/remove":
      const removeIndex = state.findIndex(
        (character) => character.id === action.payload
      );
      newCharacterList.splice(removeIndex, 1);
      window.localStorage.setItem(
        "characters",
        JSON.stringify(newCharacterList)
      );
      return newCharacterList;

    default:
      return state;
  }
};

export default characters;
