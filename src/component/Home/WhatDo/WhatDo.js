import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoOptionsSharp } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";

const WhatDo = () => {
  return (
    <section className="grid max-w-6xl grid-cols-1 gap-6 p-4 mx-auto lg:grid-cols-3">
      <div className="flex flex-col gap-2">
        <div className="p-4 border-2 border-gray-500">
          <CgProfile className="text-3xl text-green-400 shadow-2xl  shadow-green-400" />
          <h2 className="pt-3 text-2xl font-bold text-accent-400">
            Create Your Profile
          </h2>
          <p className="text-gray-400 text-[18px] pt-2 pb-2">
            Web development is the building and maintenance of websites; it’s
            the work that happens behind the. The building and maintenance.
          </p>
        </div>
        <div className="p-4 border-2 border-gray-500">
          <IoOptionsSharp className="text-3xl text-purple-500" />
          <h2 className="pt-3 text-2xl font-bold text-accent-400">
            Explore Your Option
          </h2>
          <p className="text-gray-400 text-[18px] pt-2 pb-2">
            Web development is the building and maintenance of websites; it’s
            the work that happens behind the. The building and maintenance.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1612596053923-2f790e246d07?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        ></img>
      </div>
      <div className="flex flex-col gap-2">
        <div className="p-4 border-2 border-gray-500">
          <MdOutlineMessage className="text-3xl text-orange-500" />
          <h2 className="pt-3 text-2xl font-bold text-accent-400">
            Talk Your Terms
          </h2>
          <p className="text-gray-400 text-[18px] pt-2 pb-2">
            Web development is the building and maintenance of websites; it’s
            the work that happens behind the. The building and maintenance.
          </p>
        </div>
        <div className="p-4 border-2 border-gray-500">
          <FaAddressBook className="text-3xl text-sky-500" />
          <h2 className="pt-3 text-2xl font-bold text-accent-400">
            Upload Your Resume
          </h2>
          <p className="text-gray-400 text-[18px] pt-2 pb-2">
            Web development is the building and maintenance of websites; it’s
            the work that happens behind the. The building and maintenance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatDo;
