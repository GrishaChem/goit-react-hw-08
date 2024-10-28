import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { selectContacts } from "../../redux/contacts/selectors";

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
