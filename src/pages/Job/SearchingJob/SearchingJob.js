import React, { useEffect, useState } from "react";
import SingleSearchingJob from "./SingleSearchingJob";

const SearchingJob = ({ searchJob, setDetails }) => {
  const [allJobs, setAllJobs] = useState();

  useEffect(() => {
    fetch("https://job-portal-server-mocha.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (searchJob !== "") {
          const filteredData = data.filter((job) =>
            job.job_name.toLowerCase().includes(searchJob.toLowerCase())
          );
          return setAllJobs(filteredData);
        }

        setAllJobs(data);
      });
  }, [searchJob]);

  return (
    <div>
      <h1 className="text-[20px] mb-2 text-accent-400 font-bold">
        FIND YOUR JOB
      </h1>
      <div>
        {allJobs?.map((searchJob) => (
          <SingleSearchingJob
            searchJob={searchJob}
            key={searchJob._id}
            setDetails={setDetails}
          ></SingleSearchingJob>
        ))}
      </div>
    </div>
  );
};

export default SearchingJob;
