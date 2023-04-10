import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const Job_categories = () => {
  const [job, setJob] = useState();
  useEffect(() => {
    fetch("https://job-portal-server-mocha.vercel.app/allcategory")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);
  return (
    <div className="resume-back text-white pl-14 pr-12 pt-16 pb-12">
      <h1 className="text-white text-3xl font-bold mb-2">Job Categories</h1>
      <p className="mb-10 text-white">
        Choose Your Job Sector.Where You Can Find Your Dream job.
        <br /> Your Fascination struggle keep here .
      </p>

      <div className="grid grid-cols-1  lg:grid-cols-4 ">
        {job?.map((single) => (
          <SingleJob single={single} key={single.id}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default Job_categories;
