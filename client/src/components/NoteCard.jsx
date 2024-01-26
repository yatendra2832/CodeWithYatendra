import React from "react";

const NoteCard = ({ logoSrc, title }) => {
  return (
    <div className="col-lg-3 col-md-2 col col border mx-auto d-block p-4 rounded-5 shadow p-3 mb-5 bg-body rounded ">
      <img
        className="bd-placeholder-img rounded-circle mx-auto d-block"
        width="140"
        height="140"
        src={logoSrc}
        alt=""
      />
      <h2 className="fw-normal text-center mx-4">{title} Notes</h2>
      <p className="text-center">Download Notes Here</p>
      <button className="btn btn-primary border rounded-4 d-block mx-auto my-2">
        PDF Notes
      </button>
      <button className="btn btn-primary border rounded-4 d-block mx-auto my-4">
        Chapterwise Notes
      </button>
    </div>
  );
};

export default NoteCard;
