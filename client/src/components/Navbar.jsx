import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSearch, BiCartAlt} from "react-icons/bi";
import { BsCart2} from "react-icons/bs";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../App";
const Navbar = () => {
  const user = useContext(UserContext);

  return (
    <nav className="flex bg-gray-800 text-white py-4 p justify-between items-center">
      <Link to="/">
        <img className="explorelogo" src="/explore3.jpg" alt="" />
      </Link>

      <ul className="flex w-8/12 jus gap-3 items-center text-lg">
        <li className="mr-20">
          <NavLink to="/">Home</NavLink>
        </li>
        {/* <li>
          <NavLink to="/">Sell With us</NavLink>
        </li> */}
        <li className="w-4/12">
          <form className="flex w-full">
            <input
              type="search"
              placeholder="Search for products ..."
              className="h-10 w-11/12 pl-2 placeholder:text-[.9rem]"
            />
            <button type="submit" className="bg-main px-5 text-lg">
              <BiSearch />
            </button>
          </form>
        </li>
        <li className="">
          {user ? (
            <NavLink to="/dashboard" className="">
              Account
            </NavLink>
          ) : (
            <NavLink to="/login" className="">
              Login
            </NavLink>
          )}
        </li>
        <li>
          <NavLink to="/signup" className="">
            Sign-Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/verify" className="">
            Verify
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className="">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="flex gap-2">
            <BsCart2 />
            Cart
          </NavLink>
        </li>

        {/* <li>
          <Link to="/cart">
            <Badge badgeContent={0} color="success">
              <BiCartAlt />
            </Badge>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
