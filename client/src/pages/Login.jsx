import React from "react";

const Login = () => {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative my-4 mx-4">
      <div className="col d-none d-lg-block m-4 p-4">
        <img
          src="/images/blue_images/login.png"
          alt="contact image"
          width={"400"}
          height={"400"}
          className=" rounded-circle color-primary shadow-lg"
        />
      </div>
      <div className="col p-4 d-flex flex-column position-static">
        <div className="container mt-1 ">
          <h2 className="text-center text-primary fw-bold fs-1">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Your Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-75  d-block mx-auto "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
