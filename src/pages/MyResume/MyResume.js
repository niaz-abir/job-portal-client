import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../Context/Authprovider";
import { RxResume } from "react-icons/rx";
import { MdDriveFileRenameOutline } from "react-icons/md";

const MyResume = () => {
  const { user } = useContext(AuthContext);

  const [resume, setResume] = useState("");

  useEffect(() => {
    fetch(
      `https://job-portal-server-mocha.vercel.app/resume?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setResume(data));
  }, [user?.email]);

  console.log(user?.email);

  // const { data: resume = {}, isLoading } = useQuery({
  //   queryKey: ["resume"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://job-portal-server-mocha.vercel.app/resume?email=${user?.email}`
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     return data;
  //   },
  // });
  return (
    <section>
      <div className="flex justify-start lg:justify-center items-center gap-2 mt-6 text-accent-400">
        <h1 className="text-accent-400 font-bold ml-4 lg:ml-0 text-[14px] lg:text-[24px]">
          Watch Your Resume{" "}
        </h1>
        <RxResume className="text-accent-400 font-bold mt-2 text-[24px]"></RxResume>
      </div>

      <div className="pb-32 flex justify-start lg:justify-center mt-12 ml-4 lg:ml-0 text-[12px] lg:text-[18px] text-white ">
        <div className="w-[270px] lg:w-[750px] bg-dark-300 pl-2 lg:pl-14 pr-4 lg:pr-0 pt-10 pb-16 border-l-2 border-accent-400">
          <div className="mb-10">
            <div className="flex gap-4 items-center">
              <MdDriveFileRenameOutline className=" text-[14px] lg:text-[28px] text-accent-400"></MdDriveFileRenameOutline>
              <h1 className="text-[14px] lg:text-[34px]">{resume?.name}</h1>
            </div>
            <h1>{resume?.email}</h1>
            <h1>{resume?.mobile}</h1>
            <h1>{resume?.city}</h1>
          </div>
          <div className="mb-10">
            <h1>Write now : {resume?.find} </h1>
            <h1>Trainings/Courses : {resume?.training} </h1>
            <h1>Education : {resume?.education} </h1>
          </div>
          <div className="mb-10 ">
            <h1 className="lg:text-[22px] font-bold mb-2">First Project:</h1>
            <h1>Project Name: {resume?.firstProjectName} </h1>
            <h1>Project End : {resume?.firstProjectDate} </h1>
            <h1>Live Site : {resume?.firstLiveSite} </h1>
            <h1 className="text-[10px] lg:text-[15px]">
              Project Info : {resume?.firstProjectDetails}{" "}
            </h1>
          </div>

          <div className="mb-10 ">
            <h1 className="text-[22px] font-bold mb-2">Second Project:</h1>
            <h1>Project Name : {resume?.secondProjectName} </h1>
            <h1>Project End : {resume?.secondProjectDate} </h1>
            <h1>Live Site: {resume?.secondLiveSite} </h1>
            <h1 className="text-[10px] lg:text-[15px]">
              Project Info : {resume?.secondProjectDetails}{" "}
            </h1>
          </div>
          <div>
            <h1>Portfolio : {resume?.portfolio} </h1>
            <h1>Github : {resume?.github} </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyResume;
