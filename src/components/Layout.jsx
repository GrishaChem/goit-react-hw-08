import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { useSelector } from "react-redux";

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default Layout;
