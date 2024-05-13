import React from "react";

const CommunityText = () => {
  return (
    <div className="mt-8">
      <div className="hidden lg:block">
        <h1 className="text-[20px] text-accent-400 font-semibold pb-6">
          Welcome in Community
        </h1>
        <div className="flex gap-4 pb-4">
          <div className="p-2 rounded-md bg-dark-300 text-[17px] font-bold">
            <h3>1.2 M</h3>
            <p>Users</p>
          </div>
          <div className="p-2 rounded-md bg-dark-300 text-[17px] font-bold">
            <h3>4000</h3>
            <p>Posts</p>
          </div>
          <div className="p-2 rounded-md bg-dark-300 text-[17px] font-bold">
            <h3>1000</h3>
            <p>Work</p>
          </div>
        </div>
        <div>
          <button className="w-[220px] rounded-md px-6 py-2 mr-4 btn-all">
            Know Community
          </button>
        </div>
      </div>
      <div className="hidden mt-4 lg:block">
        <h2 className="font-bold text-[20px]">About</h2>
        <p>
          This is a great news for us that we can do it for people.And people
          use it easily .I hope that can do for all and enjoy.
        </p>
      </div>
    </div>
  );
};

export default CommunityText;
