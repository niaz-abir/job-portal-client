import React from "react";
import { Link } from "react-router-dom";

const JobDetails = ({ details }) => {
  // console.log(details);
  // const { _id, place } = details;
  // console.log(_id);

  // const { detail } = details;
  return (
    <div className="flex flex-col pb-16 mb-8 lg:flex-row lg:justify-between lg:mb-0">
      <div className="ml-8">
        <h1 className="text-[20px] mb-2 text-accent-400 font-bold">
          JOB DETAILS
        </h1>

        <div>
          <div className="flex gap-16">
            <h1 className="text-2xl text-white">
              job type : {details?.job_name}
            </h1>
          </div>
          {/* <p className="mt-4 text-white">{details.details}</p> */}
          <p className="text-white">{details?.place}</p>
        </div>
        <p className="mt-8 w-[300px] lg:w-[500px] text-white">
          {details?.detail}
        </p>
      </div>
      <div className="mt-4 ml-4 lg:mt-4 lg:ml-0">
        <Link
          to={`/jobapply/${details?._id}`}
          className="px-6 py-4 mt-4 mr-2 font-bold text-white btn-all"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
