import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";
import Userprofile from "./Userprofile";
const Navbar1 = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light border-bottom sticky-top">
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand text-primary border-bottom border-primary rounded-4 border-3"
          >
            CodeWithYatendra
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container justify-content-center">
              <ul className="nav justify-content-evenly navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
                <li className="nav-item">
                  <Link to="/" className="nav-link active text-dark">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/courses" className="nav-link text-dark">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/tutorial"} className="nav-link text-dark">
                    Tutorial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/blog"} className="nav-link text-dark">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/notes"} className="nav-link text-dark">
                    Notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/contact"} className="nav-link text-dark">
                    Contact
                  </Link>
                </li>
                <li className="nav-item link-opacity-75 link-opacity-100-hover ">
                  <Link to={"/workwithus"} className="nav-link text-dark">
                    Work With Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex justify-content-center ">
              {isLoggedIn ? (
              
                  <Userprofile />
                  
              
              ) : (
                <>
                  <Link to={"/signup"}>
                    <button className="btn btn-primary btn-md px-3 mx-2">
                      SignUp
                    </button>
                  </Link>
                  <Link to={"/login"}>
                    <button className="btn btn-primary btn-md px-4 mx-2">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
