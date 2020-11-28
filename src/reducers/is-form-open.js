const isFormOpen = (state = false, action) => {
  switch (action.type) {
    case "form/open":
      return true;
    case "form/close":
      return false;
    default:
      return state;
  }
}

export default isFormOpen;
