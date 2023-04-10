import React from "react";
import "./Singlejob.css";
import { TbLayersIntersect } from "react-icons/tb";

const SingleJob = ({ single }) => {
  const { id, name, details } = single;
  return (
    <div className=" single-job mr-6 mb-6 p-4">
      <TbLayersIntersect className="text-colour text-4xl"></TbLayersIntersect>
      <h1 className="text-name mb-2 text-white font-bold">{name}</h1>
      <p className="t text-gray-300">{details.slice(0, 99) + "..."}</p>
    </div>
  );
};

export default SingleJob;
