import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const AdminApplications = () => {
  const [applications, setApplications] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllApplications = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/applications",
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      setApplications(data.applications);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteApplication = async (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this Application?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const response = await fetch(
                `http://localhost:5000/api/admin/applications/delete/${id}`,
                {
                  method: "DELETE",
                  headers: {
                    Authorization: AuthorizationToken,
                  },
                }
              );
              const data = await response.json();
              if (response.ok) {
                getAllApplications();
                toast.success("Application Deleted Successfully");
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
    getAllApplications();
  }, []);

  return (
    <>
      <h1 className="text-center text-primary fw-bold fs-2 my-2">
        Admin Panel - Application Data
      </h1>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr className="bg-primary text-light">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Resume Link</th>
                <th>Skill</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {applications.map((curApplication, index) => (
                <tr key={index}>
                  <td>{curApplication.username}</td>
                  <td>{curApplication.email}</td>
                  <td>{curApplication.phone}</td>
                  <td>{curApplication.resumeLink}</td>
                  <td>{curApplication.selectedSkill}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteApplication(curApplication._id)}
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

export default AdminApplications;
