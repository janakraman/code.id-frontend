import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../store/actions/contactsAction";
import { useDispatch } from "react-redux";

const ContactCard = ({ contact }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setImage(contact.photo);
  }, [contact.photo]);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  };

  return (
    <div className="bg-gray-900 shadow-lg rounded p-3">
      <div className="group relative">
        <img
          className="w-full h-60 object-cover block rounded"
          onError={() =>
            setImage(
              "https://www.mountaineers.org/images/placeholder-images/placeholder-contact-profile/image_preview"
            )
          }
          src={image}
          alt=""
        />
        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
          <Link to={`/contacts/${contact.id}`}>
            <button className="hover:scale-110 text-white opacity-0 transform translate-y-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="24"
                height="24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </button>
          </Link>

          <button onClick={handleDelete} className="hover:scale-110 text-white opacity-0 transform translate-y-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24"
              height="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-white text-lg">{`${contact.firstName} ${contact.lastName}`}</h3>
        <p className="text-gray-400">{contact.age}</p>
      </div>
    </div>
  );
};

export default ContactCard;
