import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assest/resume-undraw.svg";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="grid grid-cols-1 pt-24 pb-12 pl-4 resume-back lg:pl-16 lg:grid-cols-2">
      <div>
        <img className="w-full  lg:w-3/4" src={resume} alt=""></img>
      </div>
      <div className="pt-16">
        <h1 className="text-3xl font-bold text-white pb-7">
          Build Professional Resume With
          <br /> Our Free Tool{" "}
        </h1>
        <p className="pb-4 mb-2 text-white">
          Create a Professional resume in Minutes choose from a <br />
          library 30+ Free resume Templates And samples of specific
          <br /> writing example{" "}
        </p>
        {/* <input type="file" placeholder="submit"></input> */}
        <Link to="/buildresume" className="px-6 py-4 font-bold btn-all ">
          Build Resume
        </Link>
      </div>
    </div>
  );
};

export default Resume;
