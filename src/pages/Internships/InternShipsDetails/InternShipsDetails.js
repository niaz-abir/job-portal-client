import React from "react";
import { Link } from "react-router-dom";

const InternShipsDetails = ({ internDetails }) => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h1 className="text-[20px] mb-2 text-accent-400 font-bold">
            INTERN DETAILS
          </h1>
          <div>
            <h1 className="text-2xl text-white">
              Intern type : {internDetails?.intern_name}
            </h1>
            {/* <p className="mt-4 text-white">{details.details}</p> */}
            <p className="text-white">{internDetails?.place}</p>
            <p className="mt-8 text-white  w-[300px] lg:w-[500px]">
              {internDetails?.detail}
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-4">
          <Link
            to={`/internapply/${internDetails?._id}`}
            className="px-6 py-4 mt-4 mr-2 font-bold text-white btn-all"
          >
            Apply
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternShipsDetails;
