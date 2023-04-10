import React, { useEffect, useState } from "react";
import SingleIntern from "./SingleIntern";

const SearchInternship = ({ searchIntern, setInternDetails }) => {
  const [allIntern, setAllIntern] = useState();

  useEffect(() => {
    fetch("https://job-portal-server-mocha.vercel.app/interns")
      .then((res) => res.json())
      .then((data) => {
        if (searchIntern !== "") {
          const filteredData = data.filter((intern) =>
            intern.job_name.toLowerCase().includes(searchIntern.toLowerCase())
          );
          return setAllIntern(filteredData);
        }
        setAllIntern(data);
      });
  }, [searchIntern]);
  return (
    <div>
      <h1 className="text-[20px] mb-2 text-accent-400 font-bold">
        FIND YOUR INTERN
      </h1>
      <div>
        {allIntern?.map((searchIntern) => (
          <SingleIntern
            searchIntern={searchIntern}
            key={searchIntern._id}
            setInternDetails={setInternDetails}
          ></SingleIntern>
        ))}
      </div>
    </div>
  );
};

export default SearchInternship;
