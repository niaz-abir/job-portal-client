import React from "react";
import { MdLocationOn } from "react-icons/md";
import { GiOfficeChair, GiTakeMyMoney } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleSearchingJob = ({ searchJob, setDetails }) => {
  const { company, id, job_name, job_type, place, salary, experience } =
    searchJob;
  return (
    <div>
      <div className="mb-4  job-back text-white pt-8 pl-4 py-8">
        <h1 className="text-2xl  font-bold text-blue-500 mb-2">{job_name}</h1>
        <div className="flex items-center gap-2 text-[20px] mb-1">
          <MdLocationOn className="text-accent-400"></MdLocationOn>
          <h1 className="font-bold"> {place}</h1>
        </div>
        <div className="flex items-center gap-2 text-[20px]">
          <GiOfficeChair className="text-accent-400"></GiOfficeChair>
          <h1>{company}</h1>
        </div>
        <div className="flex items-center gap-2 text-[20px]">
          <BiTimer className="text-accent-400"></BiTimer>
          <h1>{job_type}</h1>
        </div>
        <div className="flex items-center gap-2 text-[20px]">
          <GiTakeMyMoney className="text-accent-400"></GiTakeMyMoney>
          <h1>{salary}</h1>
        </div>

        <h1>Experience : {experience}</h1>
        <button
          onClick={() => setDetails(searchJob)}
          className="btn-all px-6 py-4 text-white font-bold mr-2 mt-2"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default SingleSearchingJob;
