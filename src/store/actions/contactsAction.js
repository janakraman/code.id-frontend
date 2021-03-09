import axios from "axios";

export function getContacts() {
  return async (dispatch) => {
    try {
      let contacts = await axios({
        url: "https://simple-contact-crud.herokuapp.com/contact",
        method: "GET",
      });
      dispatch({
        type: "GET_CONTACTS",
        payload: contacts.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
