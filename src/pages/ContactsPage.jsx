import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/contacts/contactsSlice";
import { useSelector } from "react-redux";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h2>Loading...</h2>}
      {Error && <h2>Error...</h2>}
      <ContactList />
    </>
  );
};

export default ContactsPage;
