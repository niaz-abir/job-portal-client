import React, { useEffect, useState } from "react";
import SingleJob from "../Job_Categoris/SingleJob";
import SixJob from "./SixJob";

const Job = () => {
  const [jobm, setJob] = useState();
  useEffect(() => {
    fetch("https://job-portal-server-mocha.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);
  return (
    <div className="resume-back text-white pl-14 pr-14">
      <h1 className="text-white text-3xl font-bold">Top Jobs</h1>
      <p className="mb-10 text-white">
        Choose Your Job Sector.Where You Can Find Your Dream job.
        <br /> Your Fascination struggle keep here .
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobm?.map((singlem) => (
          <SixJob singlem={singlem} key={singlem.id}></SixJob>
        ))}
      </div>
      <button className="btn-all px-6 py-4 font-bold">View All</button>
    </div>
  );
};

export default Job;
