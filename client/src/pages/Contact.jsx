import React, { useState } from "react";
import { useAuth } from "../store/auth";
const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/contact/contactForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );

      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        alert("Contact Form submitted successfully!");
      }
      console.log(contact);
    } catch (error) {
      console.log("Contact Form Error : ", error);
    }
  };
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative my-4 mx-4">
      <div className="col d-none d-lg-block m-4 p-4">
        <img
          src="/images/blue_images/support.png"
          alt="contact image"
          width={"400"}
          height={"400"}
          className=" rounded-circle color-primary shadow-lg"
        />
      </div>
      <div className="col p-4 d-flex flex-column position-static">
        <div className="container mt-1 ">
          <h2 className="text-center text-primary fw-bold fs-1">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="name"
                placeholder="John Doe"
                required
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
              />
            </div>

            <div className="mb-3">
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
                value={contact.email}
                onChange={handleInput}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="4"
                placeholder="Your message"
                required
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
