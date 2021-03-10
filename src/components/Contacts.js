import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import { getContacts } from "../store/actions/contactsAction";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, isLoadingContacts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  if (isLoadingContacts) {
    return (
      <div className="w-full px-5 py-10 md:py-18 self-center text-white flex justify-center">
        <Lottie animationData={loadingAnimation} className="w-48 h-auto" />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-4">
      {contacts.map((contact) => {
        return <ContactCard key={contact.id} contact={contact} />;
      })}
    </section>
  );
};

export default Contacts;
