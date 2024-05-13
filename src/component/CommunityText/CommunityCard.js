import React from "react";

const CommunityCard = ({ item }) => {
  const { file, complement } = item;
  return (
    <div className="max-w-lg p-4  dark:bg-gray-50 dark:text-gray-800 shadow-md shadow-[#1f1932]">
      <div className="flex justify-between pb-4 border-bottom"></div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={file}
            alt=""
            className="block object-cover object-center w-full h-56 rounded-md dark:bg-gray-500"
          />
          {/* <div className="flex items-center text-xs">
            <span>6 min ago</span>
          </div> */}
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-600">
              Community Post in show
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-600">{complement}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
