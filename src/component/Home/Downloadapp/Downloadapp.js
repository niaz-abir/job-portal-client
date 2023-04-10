import React from "react";
import download from "../../../assest/app-download.svg";

const Downloadapp = () => {
  return (
    <div className="resume-back grid pt-28 pl-4 lg:pl-24  grid-cols-1 lg:grid-cols-2">
      <div className="pt-16">
        <h1 className="text-3xl font-bold pb-7 text-white">
          Download App For You
          <br /> Our Free Tool{" "}
        </h1>
        <p className="text-white pb-4">
          It is helpful for you that you can watch this app in playstore and{" "}
          <br />
          use it easily. Communication is large advantance for it
          <br /> writing example{" "}
        </p>
        {/* <input type="file" placeholder="submit"></input> */}
        <button className="btn-all px-6 py-4 mr-4">Play Store</button>
        <button className="btn-all px-6 py-4">App Store</button>
      </div>
      <div>
        <img className=" w-full lg:w-3/4" src={download} alt=""></img>
      </div>
    </div>
  );
};

export default Downloadapp;
