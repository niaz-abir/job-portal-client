import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const JobCategories = () => {
  // const [job, setJob] = useState();
  // useEffect(() => {
  //   fetch("https://job-portal-server-mocha.vercel.app/allcategory")
  //     .then((res) => res.json())
  //     .then((data) => setJob(data));
  // }, []);
  const allCategories = [
    {
      name: "Web Development",
      details:
        "Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
      job: "",
      find: "",
    },
    {
      name: "Cyber Security",
      details:
        "Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks.It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.",
      job: "",
      find: "",
    },
    {
      name: "Network Architect",
      details:
        "Network Architect is a professional who takes care of communication networks, such as local area networks (LANs), wide area networks (WANs), and intranets.",
      job: "",
      find: "",
    },
    {
      name: "App Development",
      details:
        "Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.",
      job: "",
      find: "",
    },
    {
      name: "The Ui/Ux Design",
      details:
        "The Ui/UX design is the process of creating products or services that provide meaningful experiences for users, involving many different areas of product development including branding, usability, function, and design. ",
      job: "",
      find: "",
    },
    {
      name: "Software Engineering",
      details:
        "Software engineering is an engineering branch associated with development of software product using well-defined scientific principles, methods and procedures",
      job: "",
      find: "",
    },
    {
      name: "Blockchain Development",
      details:
        "Blockchain is a decentralized digital ledger that saves transactions on thousands of computers around the globe. These are registered in a way that inhibits their subsequent modification. ",
      job: "",
      find: "",
    },
    {
      name: "Database Administrator",
      details:
        " Database Administrator is responsible for maintaining, securing, and operating databases and also ensures that data is correctly stored and retrieved.",
      job: "",
      find: "",
    },
  ];
  return (
    <div className="pt-16 pb-12 pr-12 text-white resume-back pl-14">
      <h1 className="mb-2 text-3xl font-bold text-accent-400">
        Job Categories
      </h1>
      <p className="mb-10 text-gray-400 text-[18px]">
        Choose Your Job Sector.Where You Can Find Your Dream job.
        <br /> Your Fascination struggle keep here .
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {allCategories?.map((single) => (
          <SingleJob single={single} key={single.id}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default JobCategories;
