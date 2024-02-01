import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
const AdminContacts = () => {
  const [contacts, SetContacts] = useState([]);
  const { AuthorizationToken } = useAuth();
  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      // console.log(data.contacts);
      SetContacts(data.contacts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);
  return (
    <>
      <h1 className="text-center text-primary fw-bold fs-2">
        Admin Panel - Contacts Data
      </h1>
      <div className="container">
        <div className="table-responsive">
        <table className="table table-striped table-bordered m-2">
          <thead className="thead-dark">
            <tr className="bg-primary text-light text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {contacts.map((curContact, index) => (
              <tr key={index}>
                <td>{curContact.username}</td>
                <td>{curContact.email}</td>
                <td>{curContact.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm ">Delete</button>
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

export default AdminContacts;
