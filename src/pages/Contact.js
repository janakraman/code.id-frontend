import { useEffect, useState } from "react";
import { getContactDetails } from "../store/actions/contactsAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateContact } from "../store/actions/contactsAction";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const Contact = () => {
  const dispatch = useDispatch();
  const {
    contactDetails,
    isLoadingContactDetails,
    updateSuccessful,
  } = useSelector((state) => state);
  const id = useParams().id;
  const [photo, setPhoto] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    dispatch(getContactDetails(id));
  }, []);

  useEffect(() => {
    setPhoto(contactDetails.photo);
  }, [contactDetails.photo]);

  useEffect(() => {
    if (updateSuccessful) setIsEditing(false);
  }, [updateSuccessful]);

  const handleEditButton = () => {
    setIsEditing(!isEditing);
    setFirstName(contactDetails.firstName);
    setLastName(contactDetails.lastName);
    setAge(contactDetails.age);
    setPhoto(contactDetails.photo);
  };

  const handleUpdate = () => {
    const payload = {
      id,
      firstName,
      lastName,
      photo,
      age,
    };
    dispatch(updateContact(payload));
  };

  if (isLoadingContactDetails) {
    return (
      <div className="min-w-screen bg-gray-900 min-h-screen flex align-middle py-5">
        <div className="w-full px-5 py-10 md:py-18 self-center text-white flex justify-center">
          <Lottie animationData={loadingAnimation} className="w-48 h-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-screen bg-gray-900 min-h-screen flex align-middle py-5">
      <div className="w-full px-5 py-10 md:py-18 self-center text-white">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {/* Bagian Kiri */}
          <div className="image border border-red-600 mx-auto overflow-hidden rounded-lg bg-white p-4">
            <img
              className="w-96 h-full object-cover mx-auto"
              src={photo}
              onError={() =>
                setPhoto(
                  "https://www.mountaineers.org/images/placeholder-images/placeholder-contact-profile/image_preview"
                )
              }
              alt="profile"
            />
          </div>

          {/* Bagian Kanan */}
          {!isEditing && (
            <div className="self-center grid justify-items-center md:justify-items-start">
              <div>
                <h3 className="text-xl mb-0 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
                  First name
                </h3>
                <h1 className="text-6xl leading-none text-center md:text-left md:text-7xl font-bold mb-5">
                  {contactDetails?.firstName}
                </h1>
              </div>
              <div>
                <h3 className="text-xl mb-0 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
                  Last name
                </h3>
                <h1 className="text-6xl leading-none text-center md:text-left md:text-7xl font-bold mb-5">
                  {contactDetails?.lastName}
                </h1>
              </div>
              <div>
                <h3 className="text-xl mb-0 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
                  Age
                </h3>
                <h1 className="text-6xl leading-none text-center md:text-left md:text-7xl font-bold mb-5">
                  {contactDetails?.age}
                </h1>
              </div>
              <div className="inline-block mr-2 mt-2">
                <button
                  type="button"
                  className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-red-400 to-red-600 transform hover:scale-110"
                  onClick={handleEditButton}
                >
                  Edit
                </button>
              </div>
            </div>
          )}

          {isEditing && (
            <div className="self-center grid justify-items-center md:justify-items-start">
              <div className="mb-5 w-9/12">
                <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
                  First name
                </h3>
                <input
                  className="w-full p-3 text-gray-900"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-5 w-9/12">
                <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
                  Last name
                </h3>
                <input
                  className="w-full p-3 text-gray-900"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="mb-5 w-9/12">
                <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
                  Age
                </h3>
                <input
                  className="w-full p-3 text-gray-900"
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="mb-5 w-9/12">
                <h3 className="text-xl mb-2 leading-none text-center md:text-left md:text-2xl font-bold text-red-500">
                  Photo
                </h3>
                <input
                  className="w-full p-3 text-gray-900"
                  type="url"
                  placeholder="Photo URL"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
              <div className="inline-block mr-2 mt-2">
                <button
                  type="button"
                  className="focus:outline-none mr-4 text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-red-400 to-red-600 transform hover:scale-110"
                  onClick={handleUpdate}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110"
                  onClick={handleEditButton}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
