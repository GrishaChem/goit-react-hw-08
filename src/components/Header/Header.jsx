import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/Auth/selectors";

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <NavLink to="/" className="text-xl font-semibold">
        Home
      </NavLink>
      <ul className="flex space-x-4 ">
        <li>
          <p>Welcome, {user.name}</p>
        </li>
        <li>
          <NavLink to="/contacts" className="hover:text-gray-400 transition">
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="hover:text-gray-400 transition">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="hover:text-gray-400 transition">
            Log in
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
