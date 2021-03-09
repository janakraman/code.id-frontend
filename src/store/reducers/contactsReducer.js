const initialState = {
  contacts: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      break;

    default:
      return state;
  }
};

export default contactsReducer;
