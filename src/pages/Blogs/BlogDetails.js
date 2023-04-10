import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  //   const blogDetails = useLoaderData();
  //   console.log(blogDetails);
  const [details, setDetails] = useState();

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://job-portal-server-mocha.vercel.app/blog/single?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        try {
          setDetails(data);
        } catch (err) {
          console.log(err);
        }
      });
  }, [id]);

  return (
    <div className="flex justify-center mt-8 pb-16">
      <div className="card w-[650px] ">
        <div>
          <figure>
            <img src={details?.img} alt="" />
          </figure>
          <h1 className="text-2xl mb-3 text-white mt-4 ml-3 lg:ml-0">
            {details?.title}
          </h1>
          <div className="avatar  ml-3 lg:ml-0">
            <div className="w-14 rounded-full">
              <img alt="" src={details?.writer} />
            </div>
          </div>
          <p className=" ml-3 lg:ml-0">Write in : {details?.time}</p>
          <p className="mt-4 text-white  ml-3 lg:ml-0">{details?.detail}</p>
        </div>
        {/* 

        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img src={details?.writer} alt="Shoes" />
        </figure> */}
      </div>

      {/* <img alt="">{details?.img}</img> */}
      {/* <p>{details?.title}</p> */}
    </div>
  );
};

export default BlogDetails;
