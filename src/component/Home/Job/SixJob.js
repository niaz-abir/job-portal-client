import React from "react";
import "./SixJob.css";

const SixJob = ({ singlem }) => {
  const { company, id, job_name, job_type, place, salery, experience } =
    singlem;
  return (
    <div className="mb-4  job-back  p-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-2">{job_name}</h1>
      <h1 className="font-bold">{place}</h1>
      <h1>{company}</h1>
      <h1>{job_type}</h1>
      <h1>{salery}</h1>
      <h1>Experience : {experience}</h1>
    </div>
  );
};

export default SixJob;
