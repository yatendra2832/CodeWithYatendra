import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const AdminUpdate = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { AuthorizationToken } = useAuth();
  const getSingleUserData = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  // updating data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Not updated...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid m-4 p-4">
      <div className="row">
        <div className="col-md-8 col-lg-4 col-sm-12 border rounded-4 p-4">
          <h1 className="text-center text-primary ">Update User Data</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                placeholder="Your Username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
            </div>

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
                value={user.email}
                onChange={handleInput}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                id="phone"
                placeholder="Your Phone Number"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-75 d-block mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdate;
