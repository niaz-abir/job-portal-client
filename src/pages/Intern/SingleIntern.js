import React from "react";
import { MdLocationOn } from "react-icons/md";
import { GiOfficeChair, GiTakeMyMoney } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { Link } from "react-router-dom";

const SingleIntern = ({ searchIntern, setInternDetails }) => {
  const { company, _id, intern_name, intern_type, place, salary, duration } =
    searchIntern;
  return (
    <div>
      <div className="py-8 pt-8 pl-4 mb-4 text-white job-back">
        <h1 className="mb-2 text-2xl font-bold text-blue-500">{intern_name}</h1>
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
          <h1>{intern_type}</h1>
        </div>
        <div className="flex items-center gap-2 text-[20px]">
          <GiTakeMyMoney className="text-accent-400"></GiTakeMyMoney>
          <h1>{salary}</h1>
        </div>

        <h1>Duration : {duration}</h1>
        <Link to={`/internDetails/${_id}`}>
          <button className="px-6 py-4 mt-2 mr-2 font-bold text-white btn-all">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleIntern;
