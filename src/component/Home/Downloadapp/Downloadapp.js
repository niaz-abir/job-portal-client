import React from "react";
import download from "../../../assest/app-download.svg";

const Downloadapp = () => {
  return (
    <div className="grid grid-cols-1 pl-4  pt-28 lg:pl-24 lg:grid-cols-2">
      <div className="pt-16">
        <h1 className="text-3xl font-bold text-white pb-7">
          Download App For You
          <br /> Our Free Tool{" "}
        </h1>
        <p className="pb-4 text-white">
          It is helpful for you that you can watch this app in playstore and{" "}
          <br />
          use it easily. Communication is large advantance for it
          <br /> writing example{" "}
        </p>
        {/* <input type="file" placeholder="submit"></input> */}
        <button className="px-6 py-4 mr-4 btn-all">Play Store</button>
        <button className="px-6 py-4 btn-all">App Store</button>
      </div>
      <div>
        <img className="w-full  lg:w-3/4" src={download} alt=""></img>
      </div>
    </div>
  );
};

export default Downloadapp;
