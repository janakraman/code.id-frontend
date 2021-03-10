const initialState = {
  contacts: [],
  contactDetails: {},
  isLoadingContacts: false,
  isLoadingContactDetails: false,
  isLoadingAddContact: false,
  addSuccessful: false,
  updateSuccessful: false,
  error: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };

    case "GET_CONTACT_DETAILS":
      return { ...state, contactDetails: action.payload };

    case "SET_LOADING_CONTACTS":
      return { ...state, isLoadingContacts: action.payload };

    case "SET_LOADING_CONTACT_DETAILS":
      return { ...state, isLoadingContactDetails: action.payload };

    case "SET_LOADING_ADD_CONTACT":
      return { ...state, isLoadingAddContact: action.payload };

    case "UPDATE_CONTACTS":
      let updatedContacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        } else return contact;
      });
      return {
        ...state,
        contacts: updatedContacts,
        contactDetails: action.payload,
      };

    case "SET_ADD_SUCCESSFUL":
      return { ...state, addSuccessful: action.payload };

    case "SET_UPDATE_SUCCESSFUL":
      return { ...state, updateSuccessful: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default contactsReducer;
