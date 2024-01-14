import React from 'react';

const BlogCard = ({ date, title, content }) => {
  return (
    <div className="p-2 mx-4 mb-4 bg-white border d-block rounded-3 shadow">
      <div className="container-fluid py-2">
        <p>{date}</p>
        <p className="col-md-8 fs-4"><b>{title}</b></p>
        <p className="col-md-8 fs-4">{content}</p>
        <button className="btn btn-primary w-25 rounded">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
