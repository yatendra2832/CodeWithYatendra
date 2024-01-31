import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("Res from server", res_data.extraDetails);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("Login Successfully");

        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
      // console.log(user);
    } catch (error) {
      console.log("Login Error", error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
                autoComplete="off"
                onChange={handleInput}
                value={user.email}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Your Password"
                required
                autoComplete="off"
                onChange={handleInput}
                value={user.password}
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
