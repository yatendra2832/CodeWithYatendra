import React from "react";
import { FaUser, FaAddressBook, FaBriefcase, FaHome } from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light m-2 p-2 shadow-lg border rounded-4">
        <div className="container-fluid ">
          <ul className="navbar-nav  d-flex justify-content-evenly w-100">
            <li className="nav-item">
              <NavLink
                to="/admin/users"
                className="nav-link fw-bold fs-6 mx-4 text-primary"
              >
                <FaUser className="mx-2 fs-6" /> Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/contacts"
                className="nav-link fw-bold fs-6 mx-4 text-primary"
              >
                <FaAddressBook className="mx-2 fs-6" /> Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/applications"
                className="nav-link fw-bold fs-6 mx-4 text-primary"
              >
                <FaBriefcase className="mx-2 fs-6" /> Applications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/"}
                className="nav-link fw-bold fs-6 mx-4 text-primary"
              >
                <FaHome className="mx-2 fs-6" /> Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default AdminLayout;
