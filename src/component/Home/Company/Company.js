import React from "react";
import { RiDropboxFill } from "react-icons/ri";
import { ImDribbble } from "react-icons/im";
import { SiUpwork } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { FaRedRiver } from "react-icons/fa";
import { MdRingVolume } from "react-icons/md";
import { FcFinePrint } from "react-icons/fc";

const Company = () => {
  return (
    <div className="resume-back pb-24  pt-40">
      <h1 className="text-center text-white text-4xl font-bold mb-14">
        Company Our <span className="text-colour">Talent</span> Has Work It
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:w-3/4 mx-auto mb-6">
        <div className="flex justify-center gap-2 mb-4 lg:mb-0">
          <RiDropboxFill className="text-2xl text-blue-500"></RiDropboxFill>
          <h1 className="text-2xl text-white">Dropbox</h1>
        </div>
        <div className="flex justify-center gap-2">
          <ImDribbble className="text-2xl text-pink-700"></ImDribbble>
          <h1 className="text-2xl text-white">Dribble</h1>
        </div>
        <div className="flex justify-center gap-2">
          <SiUpwork className="text-2xl text-green-600"></SiUpwork>
          <h1 className="text-2xl text-white">Upwork</h1>
        </div>
        <div className="flex justify-center gap-2">
          <FaFigma className="text-2xl text-orange-700"></FaFigma>
          <h1 className="text-2xl text-white">Figma</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:w-3/4 mx-auto">
        <div className="flex justify-center gap-2 mb-4 lg:mb-0">
          <ImPinterest2 className="text-2xl text-red-700"></ImPinterest2>
          <h1 className="text-2xl text-white">Pinterest</h1>
        </div>
        <div className="flex justify-center gap-2">
          <FcFinePrint className="text-2xl text-pink-700"></FcFinePrint>
          <h1 className="text-2xl text-white">Surety</h1>
        </div>
        <div className="flex justify-center gap-2">
          <FaRedRiver className="text-2xl text-pink-700"></FaRedRiver>
          <h1 className="text-2xl text-white">Bivety</h1>
        </div>
        <div className="flex justify-center gap-2">
          <MdRingVolume className="text-2xl text-teal-700"></MdRingVolume>
          <h1 className="text-2xl text-white">Fariox</h1>
        </div>
      </div>
    </div>
  );
};

export default Company;
