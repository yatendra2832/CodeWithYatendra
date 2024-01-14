import React from "react";

const CourseCard = ({ imgSrc, title, description }) => {
  return (
    <div className="col">
      <div className="card h-100 mx-4">
        <img src={imgSrc} className="card-img-top" alt="Course Thumbnail" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button className="w-50 btn btn-primary border rounded-5">
            Start Watching
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
