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
            <li className=" ms-3 ">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="ms-3 text-primary">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="ms-3 text-danger">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger"
              >
                <FaYoutubeSquare />
              </a>
            </li>
            <li className="ms-3 text-primary">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li className="ms-3 text-primary">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
