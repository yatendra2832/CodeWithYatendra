import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className="cover-container d-flex  p-3 m-2 flex-column bg-light shadow-lg">
      <main className="px-3">
        <div className="d-flex justify-content-center">
          <img
            src="/images/error.jpg"
            alt="error image"
            width={"600"}
            height={"300"}
            className="rounded-5 shadow-lg"
          />
        </div>

        <h1 className="text-danger fs-1 fw-bold text-center ">OOPS !</h1>
        <p className="text-center fw-bold fs-3 ">404- Page Not Found</p>
        <p className="text-center fs-3  text-secondary ">
          It seems like the page you're trying to access doesn't exist.
          <br />
          If you believe there's an issue, feel free to report it, and we'll
          <br />
          look into it.
        </p>
        <div className=" d-flex justify-content-center  m-4 ">
          <button className="btn btn-primary w-25 text-danger mx-4">
            <NavLink to={"/"} className={"text-white text-decoration-none"}>
              Return Home
            </NavLink>
          </button>
          <button className="btn btn-primary w-25 text- mx-4">
            <NavLink
              to={"/contact"}
              className={"text-white text-decoration-none "}
            >
              Report Problem
            </NavLink>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Error;
