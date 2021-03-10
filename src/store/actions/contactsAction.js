import axios from "axios";
import { successToaster, errorToaster } from "../../utils/toaster";

export function getContacts() {
  return async (dispatch) => {
    try {
      dispatch(setLoadingContacts(true));
      let contacts = await axios({
        url: "https://simple-contact-crud.herokuapp.com/contact",
        method: "GET",
      });
      dispatch({
        type: "GET_CONTACTS",
        payload: contacts.data.data,
      });
      dispatch(setLoadingContacts(false));
    } catch (error) {
      dispatch(setLoadingContacts(false));
      console.log(error.response);
      dispatch(setError(error));
    }
  };
}

export function getContactDetails(id) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingContactDetails(true));
      let details = await axios({
        url: `https://simple-contact-crud.herokuapp.com/contact/${id}`,
        method: "GET",
      });
      dispatch({
        type: "GET_CONTACT_DETAILS",
        payload: details.data.data,
      });
      dispatch(setLoadingContactDetails(false));
    } catch (error) {
      dispatch(setLoadingContactDetails(false));
      dispatch(setError(error));
      console.log(error.response);
    }
  };
}

export function addContact(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingAddContact(true));
      const newContact = await axios({
        url: "https://simple-contact-crud.herokuapp.com/contact",
        method: "POST",
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          age: Number(payload.age),
          photo: payload.photo,
        },
      });
      dispatch(getContacts());
      dispatch(setLoadingAddContact(false));
      dispatch(setAddSuccessful(true));
      dispatch(setAddSuccessful(false));
      successToaster("Success", `${payload.firstName} ${payload.lastName} has been added`)
    } catch (error) {
      dispatch(setLoadingAddContact(false));
      errorToaster("Oops", error.response.data.message)
      console.log(error.response.data);
    }
  };
}

export function updateContact(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingContactDetails(true));
      let edited = await axios({
        url: `https://simple-contact-crud.herokuapp.com/contact/${payload.id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          age: Number(payload.age),
          photo: payload.photo,
        },
      });
      dispatch({
        type: "UPDATE_CONTACTS",
        payload: edited.data.data,
      });
      dispatch(setUpdateSuccessful(true));
      dispatch(setUpdateSuccessful(false));
      dispatch(setLoadingContactDetails(false));
      successToaster("Success", "Contact has been updated")
    } catch (error) {
      dispatch(setLoadingContactDetails(false));
      errorToaster("Oops", error.response.data.message)
      console.log(error.response.data);
    }
  };
}

export function deleteContact(id) {
  return async (dispatch) => {
    try {
      const deleted = await axios({
        url: `https://simple-contact-crud.herokuapp.com/contact/${id}`,
        method: "DELETE",
      });
      successToaster("Success", "1 contact has been deleted");
    } catch (error) {
      console.log(error.response.data.message)
      errorToaster("Oops", error.response.data.message)
    }
  };
}

function setLoadingContacts(value) {
  return {
    type: "SET_LOADING_CONTACTS",
    payload: value,
  };
}

function setLoadingAddContact(value) {
  return {
    type: "SET_LOADING_ADD_CONTACT",
    payload: value,
  };
}

function setLoadingContactDetails(value) {
  return {
    type: "SET_LOADING_CONTACT_DETAILS",
    payload: value,
  };
}

function setAddSuccessful(value) {
  return {
    type: "SET_ADD_SUCCESSFUL",
    payload: value,
  };
}

function setUpdateSuccessful(value) {
  return {
    type: "SET_UPDATE_SUCCESSFUL",
    payload: value,
  };
}

function setError(error) {
  return {
    type: "SET_ERROR",
    payload: error,
  };
}
