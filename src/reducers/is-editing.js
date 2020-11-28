const isEditingForm = (
  state = { isEditing: false, character: null },
  action
) => {
  switch (action.type) {
    case "IS_EDITING_FORM":
      return { isEditing: true, character: action.payload };
    case "IS_NOT_EDITING_FORM":
      return { isEditing: false, character: null };
    default:
      return state;
  }
};

export default isEditingForm;
