import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user on delete button
  // const deleteUser = async (id) => {
  //   const isConfirmed = window.confirm(
  //     "Are you sure you want to delete this user?"
  //   );

  //   if (!isConfirmed) {
  //     return; // If the user cancels, do nothing
  //   }
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5000/api/admin/users/delete/${id}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: AuthorizationToken,
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     if (response.ok) {
  //       getAllUsersData();
  //       toast.success("User Deleted Successfully");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // console.log(id);
  // };

  const deleteUser = async (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const response = await fetch(
                `http://localhost:5000/api/admin/users/delete/${id}`,
                {
                  method: "DELETE",
                  headers: {
                    Authorization: AuthorizationToken,
                  },
                }
              );
              const data = await response.json();
              if (response.ok) {
                getAllUsersData();
                toast.success("User Deleted Successfully");
              }
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            // Do nothing if the user clicks "No"
          },
        },
      ],
    });
  };
  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <h1 className="text-center text-primary fw-bold fs-2 my-4">
        Admin Panel - Users Data
      </h1>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped table-bordered m-2">
            <thead className="thead-dark">
              <tr className="bg-primary text-light text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((curUser, index) => (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td>
                    <Link to={`/admin/users/${curUser._id}/edit`}>
                      <button className="btn btn-warning btn-sm fw-bold">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm fw-bold"
                      onClick={() => deleteUser(curUser._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
