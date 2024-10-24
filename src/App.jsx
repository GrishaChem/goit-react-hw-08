import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { nanoid } from "nanoid";
import { fetchContact } from "./redux/contactsOps.js";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/contactsSlice.js";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/HomePage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.JSX";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div></div>
    </>
  );
};

export default App;
