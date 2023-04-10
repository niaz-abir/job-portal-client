import React from "react";
import { Link } from "react-router-dom";

const JobDetails = ({ details }) => {
  // console.log(details);
  // const { _id, place } = details;
  // console.log(_id);

  // const { detail } = details;
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between mb-8 pb-16 lg:mb-0">
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
          {/* <p className="text-white mt-4">{details.details}</p> */}
          <p>{details?.place}</p>
        </div>
        <p className="mt-8 w-[300px] lg:w-[500px]">{details?.detail}</p>
      </div>
      <div className="mt-4 lg:mt-4 ml-4 lg:ml-0">
        <Link
          to={`/jobapply/${details?._id}`}
          className="btn-all px-6 py-4 text-white font-bold mr-2 mt-4"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
