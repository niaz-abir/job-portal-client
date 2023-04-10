import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import SingleBlog from "./SingleBlog";

const Blogs = () => {
  //   const { data: blogs, isLoading } = useQuery({
  //     queryKey: ["blogs"],
  //     queryFn: async () => {
  //       const res = await fetch("https://job-portal-server-mocha.vercel.app/blog");
  //       const data = res.json();
  //       return data;
  //     },
  //   });

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://job-portal-server-mocha.vercel.app/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ml-6 lg:ml-24 mt-16 pb-32 gap-6 h-[350vh] ">
      {blogs?.map((single) => (
        <SingleBlog single={single} key={single._id}></SingleBlog>
      ))}
    </div>
  );
};

export default Blogs;
