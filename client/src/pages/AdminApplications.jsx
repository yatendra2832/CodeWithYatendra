import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

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
                    <button className="btn btn-danger btn-sm">Delete</button>
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
