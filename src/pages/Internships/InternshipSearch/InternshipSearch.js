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
        <RiShoppingBag3Line className="text-accent-400 text-4xl font-bold"></RiShoppingBag3Line>
        <input
          type="text"
          placeholder="search Your Job"
          className="input outline-none rounded-none w-full mr-2 max-w-xs "
          onChange={(e) => setSearchIntern(e.target.value)}
          value={searchIntern}
        />
      </div>

      <button className="btn-all px-4 py-2 text-white font-bold ml-2 ">
        Search
      </button>
    </form>

    // <form onSubmit={searchInterHandler} className="flex justify-center mt-4">
    //   <div className="flex  gap-3 text-2xl">
    //     <RiShoppingBag3Line className="text-accent-400 text-4xl font-bold"></RiShoppingBag3Line>
    //     <input
    //       type="text"
    //       placeholder="search Your intern"
    //       className="input outline-none rounded-none w-full mr-2 max-w-xs "
    //       onChange={(e) => setSearchIntern(e.target.value)}
    //       value={searchIntern}
    //     />

    //     <button className="btn-all px-4 py-2 text-white font-bold ml-2 ">
    //       Search
    //     </button>
    //   </div>
    // </form>
  );
};

export default InternshipSearch;
