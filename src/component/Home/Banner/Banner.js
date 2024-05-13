import React from "react";
import "./Banner.css";
import banner3 from "../../../assest/undraw_online_resume_re_ru7s.svg";
import banner4 from "../../../assest/banner-undraw-1.svg";
import { Link } from "react-router-dom";
import { MdViewInAr } from "react-icons/md";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Banner = () => {
  const data = [
    { name: " 2021", uv: 40400, pv: 1400, amt: 2400 },
    { name: " 2022", uv: 40300, pv: 2200, amt: 2300 },
    { name: " 2023", uv: 50100, pv: 2100, amt: 2100 },
    { name: " 2024", uv: 50200, pv: 2200, amt: 2300 },
  ];

  return (
    <>
      <section className="block lg:hidden">
        <div className="grid grid-cols-1 pt-44 lg:pt-16 all-banner lg:grid-cols-2 font-Raleway">
          <div>
            <h1 className="mx-auto mt-10 text-4xl font-bold text-center text-white lg:text-5xl">
              Join Us And Explore <br /> Thousands Of{" "}
              <span className="text-colour">
                Super <br /> Jobs
              </span>
            </h1>
            <div className="flex justify-center gap-8 pt-12 pl-6 text-white lg:pl-14">
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
            <div className="flex justify-center gap-4 pt-6 ">
              <Link
                to="/buildresume"
                className="px-6 py-4 mr-4 font-bold btn-all"
              >
                Get Started
              </Link>
              <button className="px-6 py-4 font-bold btn-all">About us</button>
            </div>
          </div>

          <div className="pt-6">
            <img className="w-full rounded-md h-3/4" src={banner4} alt=""></img>
          </div>
        </div>
      </section>

      <section className="hidden max-w-6xl pb-12 mx-auto mt-8 shadow-xl lg:block shadow-dark-new ">
        <div className="flex items-center gap-8">
          <h1 className="text-[80px] font-bold text-accent-400">HIRE NOW </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex p-2 -space-x-4 rounded-md bg-dark-300">
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                alt=""
                className="object-cover object-center w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <span className="flex items-center justify-center w-20 h-20 font-semibold border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-300">
                +3
              </span>
            </div>
          </div>
          <div className="p-4 rounded-md shadow-2xl bg-dark-300 shadow-dark-new">
            <h2>
              Success try to make you great result<br></br> if you want you can
              do it easily<br></br>
              Job try to make you great result<br></br> lot of option in your
              hand do it.<br></br>
              No way make you great result try <br></br> do hard and earn your
              result here<br></br>A great story try to make you great
              <br></br> and hope you can make it
            </h2>
            {/* <h1 className="text-[40px]">
            Success Try<br></br> To Your Make<br></br> History
          </h1> */}
          </div>
        </div>
        <div>
          <h1 className="text-[75px] font-bold">WITH COMPLETE CONFIDENCE!</h1>
        </div>

        {/* chart section */}
        <div className="flex gap-8 pt-6">
          <div className="p-4 text-white rounded-md bg-dark-300">
            <div className="flex gap-8 pt-4 pl-4">
              <div>
                <h1 className="text-3xl font-bold">10K+</h1>
                <p className="font-bold"> Job seekers</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">7k+</h1>
                <p className="font-bold">Learning</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold">25k+</h1>
                <p className="font-bold">Community Member</p>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="text-[30px] font-bold">
                "We aspire to elevate your skills
              </h2>
              <h2 className="text-[30px] font-bold">
                and exceed{" "}
                <span className="text-accent-400">your expectations</span>"
              </h2>
              <button className="w-[220px] rounded-md px-6 py-4 font-bold text-white mr-4 mt-6 btn-all">
                Explore Us
              </button>
            </div>
          </div>

          <div>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>

            <h1 className="text-center text-accent-400 ">
              People who find job recently
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
