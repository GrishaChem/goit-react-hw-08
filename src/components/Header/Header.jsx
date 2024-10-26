import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/Auth/selectors";
import s from "../Header/Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <NavLink to="/" className="text-xl font-semibold">
        Home
      </NavLink>
      {isLoggedIn && (
        <div className="">
          <p>Welcome {user.name}</p>
        </div>
      )}
      <ul className="flex space-x-4 ">
        <li>
          <NavLink to="/contacts" className="hover:text-gray-400 transition">
            Contacts
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink
                to="/register"
                className="hover:text-gray-400 transition"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:text-gray-400 transition">
                Log in
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && <button onClick={() => dispatch(logout())}>Exit</button>}
      </ul>
    </div>
  );
};

export default Header;
