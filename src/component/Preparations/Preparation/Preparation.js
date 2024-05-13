import React, { useState } from "react";

import VideoPreparation from "./VideoPreparation";
import ScreenPreparation from "./ScreenPreparation";
import { FaVideoSlash } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";

const Preparation = () => {
  const [activeComponent, setActiveComponent] = useState("video");

  const handleVideoButtonClick = () => {
    setActiveComponent("video");
  };

  const handleScreenButtonClick = () => {
    setActiveComponent("screen");
  };
  return (
    <div>
      <div className="flex justify-center gap-4 mt-14">
        <div className="flex items-center gap-2 px-6 py-4 font-bold bg-accent-400">
          <button className="" onClick={handleVideoButtonClick}>
            Video Recording
          </button>
          <FaVideoSlash className="text-[20px]"></FaVideoSlash>
        </div>
        <div className="flex items-center gap-2 px-6 py-4 font-bold duration-300 bg-accent-400">
          <button onClick={handleScreenButtonClick}>Screen Recording</button>
          <MdOutlineScreenSearchDesktop className="text-[20px]"></MdOutlineScreenSearchDesktop>
        </div>
      </div>

      <div className="pt-14">
        {activeComponent === "video" && <VideoPreparation />}
        {activeComponent === "screen" && <ScreenPreparation />}
      </div>
    </div>
  );
};

export default Preparation;
