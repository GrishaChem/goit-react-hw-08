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

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ContactForm />}></Route>
          <Route path="/" element={<SearchBox />}></Route>
          {isLoading && <h2>Loading...</h2>}
          {Error && <h2>Error...</h2>}
          <Route path="/" element={<ContactList />}></Route>
        </Route>
      </Routes>

      {/* <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <h2>Loading...</h2>}
        {Error && <h2>Error...</h2>}
        <ContactList />
      </div> */}
    </>
  );
};

export default App;
