const menuReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case "TOGGLE_MENU": {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export default menuReducer;
