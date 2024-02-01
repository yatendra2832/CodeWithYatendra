import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import { IoSettings } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Userprofile = () => {
  const { user } = useAuth();
  return (
    <div className="dropdown mx-4">
      <a
        href="#"
        className="d-flex align-items-center text-primary text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong className="text-primary">Hi, {user.username}</strong>
      </a>
      <ul
        className="dropdown-menu dropdown-menu-light shadow"
        aria-labelledby="dropdownUser1"
      >
        <li>
          <a className="dropdown-item fw-bold" href="#">
            <FaClock className="me-2 " /> Watch Later
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-bold" href="#">
            <IoSettings className="me-2 " /> Settings
          </a>
        </li>
        <li>
          <Link
            to={"/profile"}
            className="text-decoration-none dropdown-item fw-bold  "
          >
            <CgProfile className="me-2 " />
            Profile
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <Link to="/logout">
          <button className="btn btn-outline-primary btn-md px-3 mx-2 w-75">
            <IoIosLogOut className="me-2" /> Logout
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Userprofile;
