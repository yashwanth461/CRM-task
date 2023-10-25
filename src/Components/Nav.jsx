import React from "react";
import { FaAmazon, FaDollarSign, FaUsers } from "react-icons/fa";
import {
  MdHome,
  MdLogin,
  MdContactPage,
  MdBookmarkBorder,
  MdAccountCircle,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <FaAmazon size={60} />
      <ul>
        <li>
          <MdHome color={"black"} size={30} className="nav-icon" />
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <MdBookmarkBorder color={"black"} size={30} className="nav-icon" />
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <FaDollarSign color={"black"} size={30} className="nav-icon" />
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
        </li>
        <li>
          <FaUsers color={"black"} size={30} className="nav-icon" />
          <Link to="/customers" className="nav-link">
            Customers
          </Link>
        </li>
        <li>
          <MdContactPage color={"black"} size={30} className="nav-icon" />
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li>
          <MdLogin color={"black"} size={30} className="nav-icon" />
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
        <li>
          <MdAccountCircle color={"black"} size={30} className="nav-icon" />
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
