const properties = {
  initiative: 0,
  name: "",
  ac: 0,
  maxHp: 0
};

const newCharacter = (state = { ...properties }, action) => {
  switch (action.type) {
    case "newCharacter/change":
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    case "newCharacter/reset":
      return {...properties};
    case "newCharacter/isEditing" :
      return {...action.payload};
    default:
      return state;
  }
};

export default newCharacter;
