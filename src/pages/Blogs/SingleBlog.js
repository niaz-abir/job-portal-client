import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ single }) => {
  const { _id, img, title } = single;
  return (
    <Link to={`/Blogdetails/${_id}`}>
      <div className="card card-compact w-96 h-[400px] rounded-none shadow-xl">
        <figure>
          <img src={single.img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{single?.title}</h2>
          <p>{single?.detail?.slice(1, 100)} ...</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlog;
