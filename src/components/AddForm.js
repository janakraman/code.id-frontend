import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../store/actions/contactsAction";

const AddForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoadingAddContact, addSuccessful } = useSelector((state) => state);

  const handleAdd = () => {
    const payload = {
      firstName,
      lastName,
      age,
      photo,
    };
    dispatch(addContact(payload));
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setPhoto("");
    history.push("/");
  };

  useEffect(() => {
    if (addSuccessful) {
      history.push("/");
    }
  }, [addSuccessful]);

  return (
    <form className="bg-gray-900 p-10 rounded-xl shadow-2xl flex-col justify-center w-2/3 mx-auto">
      <div className="mb-5">
        <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
          First name
        </h3>
        <input
          className="w-full p-3 text-gray-900"
          type="text"
          placeholder="Input first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
          Last name
        </h3>
        <input
          className="w-full p-3 text-gray-900"
          type="text"
          placeholder="Input last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
          Age
        </h3>
        <input
          className="w-full p-3 text-gray-900"
          type="number"
          placeholder="Input age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-8">
        <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
          Photo
        </h3>
        <input
          className="w-full p-3 text-gray-900"
          type="url"
          placeholder="Input photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
      </div>
      <div className="mr-2 mt-5 flex justify-center">
        <button
          type="button"
          className="focus:outline-none mr-4 text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-red-400 to-red-600 transform hover:scale-110"
          onClick={handleAdd}
        >
          Add Contact
        </button>
        <button
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddForm;
