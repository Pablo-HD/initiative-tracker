const isFormOpen = (state = false, action) => {
  switch (action.type) {
    case "OPEN_FORM":
      return true;
    case "CLOSE_FORM":
      return false;
    default:
      return state;
  }
};

export default isFormOpen;
