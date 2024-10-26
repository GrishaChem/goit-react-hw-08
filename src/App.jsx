import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { nanoid } from "nanoid";
// import { fetchContact } from "./redux/contactsOps.js";
import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
} from "./redux/contacts/contactsSlice.js";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/HomePage.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { useDispatch } from "react-redux";
import { refresh } from "./redux/auth/operations.js";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute.jsx";

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const Error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo={"/contacts"}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo={"/contacts"}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <div></div>
    </>
  );
};

export default App;
