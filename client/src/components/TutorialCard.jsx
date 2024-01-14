import React from "react";

const TutorialCard = ({ imgSrc, tutorialName }) => {
  return (
    <div className="col-lg-3 col-md-2 col border mx-auto d-block p-4 rounded-5 shadow p-3 mb-5 my-4 bg-body rounded">
      <img
        className="bd-placeholder-img rounded-circle mx-auto d-block"
        width="140"
        height="140"
        src={imgSrc}
        alt=""
      />
      <h2 className="fw-normal text-center mx-4">{tutorialName} Tutorial</h2>
      <button className="btn btn-primary border rounded-4 d-block mx-auto my-4">
        Start Learning!
      </button>
    </div>
  );
};

export default TutorialCard;
