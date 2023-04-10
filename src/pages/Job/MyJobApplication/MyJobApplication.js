import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../Context/Authprovider";

const MyJobApplication = () => {
  const { user } = useContext(AuthContext);
  const [allApplication, setApplication] = useState();

  useEffect(() => {
    fetch(
      `https://job-portal-server-mocha.vercel.app/alljobs?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        try {
          setApplication(data);
        } catch (err) {
          console.log(err);
        }
      });
  }, [user]);

  //    fetch(`https://job-portal-server-mocha.vercel.app/alljobs?email=${user?.email}`)
  //   const { data: jobapply = [] } = useQuery({
  //     queryKey: ["alljob"],
  //     queryFn: async () => {
  //       const res = await fetch(url);
  //       const data = res.json();
  //       console.log(data);
  //     },

  //   });

  return (
    <div className="bg-dark-400 pb-[800px] pt-8 ">
      <h1 className="text-center text-accent-400 text-[26px] mb-8 font-semibold">
        My Job Application
      </h1>
      <div className="flex justify-center">
        <div className="overflow-x-auto rounded-none">
          <table className="table w-[700px] rounded-none table-bordered table-striped table-responsive ">
            {/* head */}
            <thead>
              <tr className="bg-dark-300 text-white">
                <th className="text-white bg-dark-300"></th>
                <th className="text-white bg-dark-300 border-r-2 border-accent-400 text-[20px]">
                  Job Title
                </th>
                <th className="text-white bg-dark-300 text-[20px]">company</th>
              </tr>
            </thead>
            <tbody>
              {allApplication &&
                allApplication?.map((application, i) => (
                  <tr key={application?._id} className="bg-dark-300 text-white">
                    <th className="text-white bg-dark-300 border-r-2 border-accent-400">
                      {i + 1}
                    </th>
                    <td className="text-white bg-dark-300">
                      {application?.job}
                    </td>
                    <td className="text-white bg-dark-300">
                      {application?.company}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyJobApplication;
