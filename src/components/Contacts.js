import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import { getContacts } from "../store/actions/contactsAction";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  return (
      <section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-4">
        {contacts.map((contact) => {
          return <ContactCard key={contact.id} contact={contact} />;
        })}
      </section>
  );
};

export default Contacts;
