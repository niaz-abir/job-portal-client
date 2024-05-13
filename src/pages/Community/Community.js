import React from "react";
import CommunityText from "../../component/CommunityText/CommunityText";
import PostCommunity from "../../component/CommunityText/PostCommunity";
import { useQuery } from "react-query";
import CommunityCard from "../../component/CommunityText/CommunityCard";
import { FaUser } from "react-icons/fa";

const Community = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["community"],
    queryFn: async () => {
      return await fetch("http://localhost:5000/community").then((res) =>
        res.json()
      );
    },
  });
  if (isLoading) {
    <div>
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>;
  }
  refetch();

  return (
    <div className=" h-[550vh]">
      <div className="flex ml-4 lg:ml-14">
        <div className="w-0 lg:w-1/5 ">
          <CommunityText />
        </div>
        <div className="w-full lg:w-4/5 ">
          {" "}
          <PostCommunity />
          {/* show community */}
          <div>
            <h1 className="text-[20px] flex items-center gap-2 text-accent-400 font-semibold pb-4 mt-8 ml-4">
              Post In User <FaUser />
            </h1>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {data?.map((item) => (
                <CommunityCard key={item?.id} item={item}></CommunityCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
