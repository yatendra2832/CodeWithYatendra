import React from "react";

const Contact = () => {
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
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-3">
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

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your message"
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
