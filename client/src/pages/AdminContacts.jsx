import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
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

  const deleteContact = async (id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this contact?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const response = await fetch(
                `http://localhost:5000/api/admin/contacts/delete/${id}`,
                {
                  method: "DELETE",
                  headers: {
                    Authorization: AuthorizationToken,
                  },
                }
              );
              const data = await response.json();
              if (response.ok) {
                getAllContacts();
                toast.success("Contact Deleted Successfully");
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
                    <button
                      className="btn btn-danger btn-sm "
                      onClick={() => deleteContact(curContact._id)}
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

export default AdminContacts;
