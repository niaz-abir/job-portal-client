import React, { useState } from "react";
import JobDetails from "../JobDetails/JobDetails";
import JobSearch from "../JobSearch/JobSearch";
import SearchingJob from "../SearchingJob/SearchingJob";

const Job = () => {
  const [searchJob, setSearchJob] = useState("");
  const [details, setDetails] = useState();

  const searchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="pl-6 pr-6 mt-48 lg:mt-16 h-[3300vh]">
      <div>
        <JobSearch
          searchJob={searchJob}
          setSearchJob={setSearchJob}
          searchHandler={searchHandler}
        ></JobSearch>
      </div>

      <div className="grid gap-6 mt-16 grid-cols-1 lg:grid-cols-10">
        <div className="col-span-1 lg:col-span-4">
          <SearchingJob
            searchJob={searchJob}
            setDetails={setDetails}
          ></SearchingJob>
        </div>
        <div className="col-span-1 lg:col-span-6">
          <JobDetails details={details}></JobDetails>
        </div>
      </div>
    </section>
  );
};

export default Job;
