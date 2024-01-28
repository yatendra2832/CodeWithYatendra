import React from "react";
import { useState } from "react";

const WorkWithUs = () => {
  const skillsOptions = [
    "Subtitle Writer",
    "Python Dev",
    "PHP Dev",
    "Javascript Dev",
    "JAVA Dev",
    "MERN Dev",
    "Content Writer",
    "Video Editor",
  ];
  const [workFormData, setWorkFormData] = useState({
    username: "",
    email: "",
    phone: "",
    resumeLink: "",
    selectedSkill: "",
    agreeToTerms: false,
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;

    setWorkFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/application/applicationForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workFormData),
        }
      );
      
      if (response.ok) {
        setWorkFormData({
          username: "",
          email: "",
          phone: "",
          resumeLink: "",
          selectedSkill: "",
          agreeToTerms: false,
        });
      }
      console.log("Form Data:", workFormData);
    } catch (error) {
      console.log("Application Form Error:", error);
    }

    // Add your logic for handling the form data (e.g., sending it to a server)
  };

  return (
    <>
      <div className="p-3   bg-light shadow rounded-3 w-100 d-block  p-4">
        <div className="container-fluid d-flex flex-column-reverse flex-md-row align-items-center justify-content-around">
          <div className="w-lg-50 w-md-75 w-100">
            <h2 className="text-center text-primary fw-bold fs-2">
              Interested in working with us <br />
              Apply Now
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                  autoComplete="off"
                  value={workFormData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={workFormData.email}
                  onChange={handleInputChange}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="Phonenumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="off"
                  value={workFormData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="Resume" className="form-label">
                  Link to your Resume
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="resumeLink"
                  name="resumeLink"
                  required
                  autoComplete="off"
                  value={workFormData.resumeLink}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="Skills" className="form-label">
                  Skills
                </label>
                <select
                  className="form-select"
                  id="selectedSkill"
                  name="selectedSkill"
                  value={workFormData.selectedSkill}
                  onChange={handleInputChange}
                >
                  <option value="" className="fw-bold ">
                    Select a skill
                  </option>
                  {skillsOptions.map((skill, index) => (
                    <option key={index} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeToTerms"
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-50 d-block mx-auto"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-lg-50 w-md-25 w-100 p-4">
            <img
              src="/images/blue_images/webdev.png"
              alt="workwithusimages"
              width={"500"}
              height={"500"}
              className="img-fluid p-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;
