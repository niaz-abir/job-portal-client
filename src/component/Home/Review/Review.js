import React from "react";
import { BiVector } from "react-icons/bi";
import "./Review.css";
import SingleReview from "./SingleReview";
import img1 from "../../../assest/review1.jpg";
import img2 from "../../../assest/review13.jpg";
import img3 from "../../../assest/review12.jpg";
import img4 from "../../../assest/review14.jpg";

const Review = () => {
  const allReview = [
    {
      id: 1,
      img: img1,
      name: "Adil Khan",
      review:
        "This is a great website for searching job .I hope everyone can enjoyed it very much.The trainer of this instuite is outsanding. ",
    },
    {
      id: 2,
      img: img2,
      name: "Nadil Ahmed",
      review:
        "job is very important for us .We should sincere it and about our carrier this website help me lot of. ",
    },
    {
      id: 3,
      img: img3,
      name: "Harry kane",
      review:
        "The service of this website is to good .It helps me lot of .I think lot of people can takes help from this website ",
    },
    {
      id: 4,
      img: img4,
      name: "Asfaq Nifun",
      review:
        "In city this website gives us a great environment for job. If anyone can use this website properly he can make a great hardwork",
    },
  ];

  return (
    <div>
      <h2 className=" text-center text-4xl text-accent-400 font-semibold py-5 mb-4  pt-24">
        {" "}
        Users Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4  bg-dark-400 pl-8  gap-4 pb-8 pr-8 ">
        {allReview?.map((single) => (
          <SingleReview single={single} key={single.id}></SingleReview>
        ))}
      </div>
    </div>

    // <div className="resume-back pt-28  pl-16 pr-16">
    //   <h1 className="text-white text-3xl font-bold">Review</h1>
    //   <p className="text-white pb-6">
    //     Lorem ipsum dolor sit amet, consectetur
    //     <br /> adipisicing elit. Eligendi exercitationem{" "}
    //   </p>
    //   <div className="grid grid-cols-1 lg:grid-cols-2">
    //     <div className="bg-review mb-4 w-full lg:w-3/4 px-6 py-6">
    //       <BiVector className="text-pink-700 text-4xl"></BiVector>
    //       <p className="text-white">
    //         {" "}
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
    //         exercitationem
    //       </p>
    //     </div>
    //     <div className="bg-review  mb-4 w-full  lg:w-3/4 px-6 py-6">
    //       <BiVector className="text-pink-700 text-4xl"></BiVector>
    //       <p className="text-white">
    //         {" "}
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
    //         exercitationem
    //       </p>
    //     </div>
    //     <div className="bg-review  mb-4 lg:mb-0 w-full  lg:w-3/4 px-6 py-6">
    //       <BiVector className="text-pink-700 text-4xl"></BiVector>
    //       <p className="text-white">
    //         {" "}
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
    //         exercitationem
    //       </p>
    //     </div>
    //     <div className="bg-review w-full lg:w-3/4 px-6 py-6">
    //       <BiVector className="text-pink-700 text-4xl"></BiVector>
    //       <p className="text-white">
    //         {" "}
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
    //         exercitationem
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Review;
