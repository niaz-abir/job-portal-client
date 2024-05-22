import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";

const InternshipSearch = ({
  searchIntern,
  setSearchIntern,
  searchInterHandler,
}) => {
  return (
    <form onSubmit={searchInterHandler} className="flex justify-center mt-4">
      <div className="flex gap-3 text-2xl">
        <RiShoppingBag3Line className="text-4xl font-bold text-accent-400"></RiShoppingBag3Line>
        <input
          type="text"
          placeholder="search Your Job"
          className="w-full max-w-xs mr-2 rounded-none outline-none input "
          onChange={(e) => setSearchIntern(e.target.value)}
          value={searchIntern}
        />
      </div>

      <button className="px-4 py-2 ml-2 font-bold text-white btn-all ">
        Search
      </button>
    </form>
  );
};

export default InternshipSearch;
