import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">
              Copyright © 2024 CodeWithYatendra.com
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex fs-2 m">
            <li className=" ms-3">
              <FaInstagram />
            </li>
            <li className="ms-3 text-primary">
              <FaFacebook />
            </li>
            <li className="ms-3 text-danger">
              <FaYoutubeSquare />
            </li>
            <li className="ms-3 text-primary">
              <FaTwitterSquare />
            </li>
            <li className="ms-3 text-primary">
              <FaLinkedin />
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
