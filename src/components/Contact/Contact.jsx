import React from "react";
import s from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations.js";

const Contact = ({ name, number, contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.liI}>
      <div className={s.data}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button
        className={s.button}
        onClick={() => dispatch(deleteContact(contact))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
