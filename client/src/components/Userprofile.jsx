import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
const Userprofile = () => {
  const { user } = useAuth();
  return (
    <div className="dropdown ">
      <a
        href="#"
        className="d-flex align-items-center text-primary text-decoration-none dropdown-toggle "
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
        className="dropdown-menu dropdown-menu-light text-small shadow"
        aria-labelledby="dropdownUser1"
        // Set the initial display style
      >
        <li>
          <a className="dropdown-item" href="#">
            Watchlater
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        
          <Link to={"/logout"}>
            <button className="btn btn-outline-primary btn-md px-3 mx-2 w-75">Logout</button>
          </Link>
      </ul>
    </div>
  );
};

export default Userprofile;
