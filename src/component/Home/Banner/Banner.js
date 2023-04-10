import React from "react";
import "./Banner.css";
import banner3 from "../../../assest/undraw_online_resume_re_ru7s.svg";
import banner4 from "../../../assest/banner-undraw-1.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 pt-44 lg:pt-16 all-banner lg:grid-cols-2 font-Raleway">
      <div>
        <h1 className="text-4xl lg:text-5xl text-white font-bold text-center  mt-10 mx-auto">
          Join Us And Explore <br /> Thousands Of{" "}
          <span className="text-colour">
            Super <br /> Jobs
          </span>
        </h1>
        <div className=" flex gap-8 justify-center text-white pl-6 lg:pl-14 pt-12">
          <div>
            <h1 className="text-3xl font-bold">10K</h1>
            <p>active job seekers</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">7k</h1>
            <p>active job seekers</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">25+</h1>
            <p>active job seekers</p>
          </div>
        </div>
        <div className=" pt-6  flex justify-center gap-4">
          <Link to="/buildresume" className="btn-all font-bold px-6 py-4 mr-4">
            Get Started
          </Link>
          <button className="btn-all font-bold px-6 py-4">About us</button>
        </div>
      </div>

      <div className="pt-6">
        <img className="w-full  rounded-md h-3/4" src={banner4} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
