import React, { useState } from "react";
import InternshipSearch from "../../InternshipSearch/InternshipSearch";
import SearchInternship from "../../SearchInternship/SearchInternship";
import InternShipsDetails from "../../InternShipsDetails/InternShipsDetails";

const Internship = () => {
  const [searchIntern, setSearchIntern] = useState("");
  const [internDetails, setInternDetails] = useState();

  const searchInterHandler = (event) => {
    event.preventDefault();
    console.log("he man");
  };

  return (
    <section className="pl-6 pr-6 mt-48 lg:mt-16 h-[3500vh]">
      <div>
        <InternshipSearch
          searchIntern={searchIntern}
          setSearchIntern={setSearchIntern}
          searchInterHandler={searchInterHandler}
        ></InternshipSearch>
      </div>

      <div className="grid gap-6 mt-16 grid-cols-1  lg:grid-cols-10 ">
        <div className="col-span-1 lg:col-span-4">
          <SearchInternship
            searchIntern={searchIntern}
            setInternDetails={setInternDetails}
          ></SearchInternship>
        </div>
        <div className=" col-span-1 lg:col-span-6">
          <InternShipsDetails
            internDetails={internDetails}
          ></InternShipsDetails>

          {/* <InternShipsDetails internDetails={internDetails}></InternShipsDetails> */}
        </div>
      </div>
    </section>
  );
};

export default Internship;
