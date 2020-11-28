const properties = {
  initiative: "",
  name: "",
  ac: "",
  maxHp: "",
  notes: "",
  conditions: []
};

const characterForm = (state = { ...properties }, action) => {
  switch (action.type) {
    case "CHANGE_CHARACTER_FORM":
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    case "RESET_CHARACTER_FORM":
      return {...properties};
    case "EDIT_CHARACTER_PROPERTIES" :
      return {...action.payload};
    default:
      return state;
  }
};

export default characterForm;
