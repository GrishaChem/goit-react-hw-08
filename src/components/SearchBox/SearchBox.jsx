import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/contacts/filtersSlice";
import { selectContacts } from "../../redux/contacts/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name=""
        id=""
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
