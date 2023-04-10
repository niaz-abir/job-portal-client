import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";

const JobSearch = ({ searchJob, setSearchJob, searchHandler }) => {
  return (
    <form onSubmit={searchHandler} className="flex justify-center mt-4">
      <div className="flex  gap-3 text-2xl">
        <RiShoppingBag3Line className="text-accent-400 text-4xl font-bold"></RiShoppingBag3Line>
        <input
          type="text"
          placeholder="search Your Job"
          className="input outline-none rounded-none w-full mr-2 max-w-xs "
          onChange={(e) => setSearchJob(e.target.value)}
          value={searchJob}
        />
      </div>

      <button className="btn-all px-4 py-2 text-white font-bold ml-2 ">
        Search
      </button>
    </form>
  );
};

export default JobSearch;
