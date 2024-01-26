import React from "react";

const WorkWithUs = () => {
  return (
    <>
      <div className="p-3   bg-light shadow rounded-3 w-100 d-block  p-4">
        <div className="container-fluid d-flex flex-column-reverse flex-md-row align-items-center justify-content-around">
          <div className="w-lg-50 w-md-75 w-100">
            <h2 className="text-center text-primary fw-bold fs-2">
              Interested in working with us <br />
              Apply Now
            </h2>
            <form>
              <div className="mb-2">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
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
                  id="exampleinputtel"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="Resume" className="form-label">
                  Link to your Resume
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="exampleinputurl"
                />
              </div>
              <h3 className="text-center">Skills</h3>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Subtitle Writer
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Python Dev
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  PHP Dev{" "}
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="option4"
                />
                <label className="form-check-label" htmlFor="inlineRadio4">
                  Javascript Dev{" "}
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio5"
                  value="option5"
                />
                <label className="form-check-label" htmlFor="inlineRadio5">
                  JAVA Dev{" "}
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio6"
                  value="option6"
                />
                <label className="form-check-label" htmlFor="inlineRadio6">
                  {" "}
                  MERN Dev
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio7"
                  value="option7"
                />
                <label className="form-check-label" htmlFor="inlineRadio7">
                  {" "}
                  Content Writer
                </label>
              </div>
              <div className="form-check form-check-inline col-md-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio8"
                  value="option8"
                />
                <label className="form-check-label" htmlFor="inlineRadio8">
                  {" "}
                  Video Editor
                </label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
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
