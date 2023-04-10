import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAirFreshener } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BuildResume = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleResume = (data) => {
    const buildResume = {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      city: data.city,
      education: data.education,
      find: data.find,
      training: data.training,
      portfolio: data.portfolio,
      github: data.github,
      firstProjectName: data.firstProjectName,
      firstProjectDate: data.firstProjectDate,
      firstLiveSite: data.firstLiveSite,
      firstProjectDetails: data.firstProjectDetails,
      secondProjectName: data.secondProjectName,
      secondProjectDate: data.secondProjectDate,
      secondLiveSite: data.secondLiveSite,
      secondProjectDetails: data.secondProjectDetails,
    };

    fetch("https://job-portal-server-mocha.vercel.app/resume", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buildResume),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate("/resume");
        reset();
      });
  };
  return (
    <div className="mt-12">
      <h1 className="text-center font-extralight text-accent-400 text-3xl mb-8">
        Build Up Your Resume
      </h1>
      <form onSubmit={handleSubmit(handleResume)} className="h-[200vh]">
        <div className=" flex flex-col lg:flex-row justify-center gap-16 mx-auto">
          {/* first div */}
          <div className="w-[350px] mt-4">
            <h1 className="text-accent text-[18px] font-semibold">
              Fill Up Your Personal Details
            </h1>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Name
                </span>
              </label>
              <input
                type="name"
                {...register("name", { required: "name is required" })}
                placeholder="name"
                className="input input-bordered bg-dark-mid  text-white rounded-none h-[55px] w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: "email is required" })}
                placeholder="email"
                className="input input-bordered bg-dark-mid  text-white rounded-none h-[55px] w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Mobile
                </span>
              </label>
              <input
                type="number"
                {...register("mobile", { required: "mobile is required" })}
                placeholder="mobile"
                className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  City
                </span>
              </label>
              <input
                type="text"
                {...register("city", { required: "city is required" })}
                placeholder="city"
                className="input input-bordered bg-dark-mid   text-white rounded-none h-[55px] w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Education
                </span>
              </label>
              <select
                {...register("education")}
                className="select input-bordered bg-dark-mid   text-white rounded-none h-[55px]  w-full max-w-xs"
              >
                <option disabled selected>
                  Education
                </option>
                <option value="Associate's Degree">Associate's Degree</option>
                <option value="Bachelor's">Bachelor's </option>
                <option value="Master's">Master's</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Find
                </span>
              </label>
              <select
                {...register("find")}
                className="select input-bordered bg-dark-mid  text-white rounded-none h-[55px] w-full max-w-xs mt-2"
              >
                <option disabled selected>
                  Find
                </option>
                <option value="Intern">Intern</option>
                <option value="Jobs"> Jobs</option>
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Trainings/Courses
                </span>
              </label>
              <input
                type="text"
                {...register("training")}
                placeholder=""
                className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  portfolio
                </span>
              </label>
              <input
                type="text"
                {...register("portfolio")}
                placeholder="portfolio"
                className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Github
                </span>
              </label>
              <input
                type="text"
                {...register("github")}
                placeholder="github"
                className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
              />
            </div>
          </div>
          {/* second div */}
          <div className="w-[350px] ">
            {/* first project */}
            <div>
              <h2 className="text-accent text-[18px] mt-4 font-bold">
                Show Your First Project:{" "}
              </h2>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white text-[15px] tracking-[.15em]">
                    ProjectName
                  </span>
                </label>
                <input
                  type="text"
                  {...register("firstProjectName")}
                  placeholder=""
                  className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text text-white text-[15px] tracking-[.15em]">
                    Finishing Date
                  </span>
                </label>
                <input
                  type="date"
                  {...register("firstProjectDate")}
                  placeholder=""
                  className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white text-[15px] tracking-[.15em]">
                    Live Site
                  </span>
                </label>
                <input
                  type="link"
                  {...register("firstLiveSite")}
                  placeholder=""
                  className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
                />
              </div>
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Details
                </span>
              </label>
              <textarea
                {...register("firstProjectDetails")}
                className="textarea textarea-bordered bg-dark-mid text-white rounded-none h-[100px] textarea-lg w-full max-w-xs"
                placeholder="details"
              />
            </div>

            {/* first project */}
            <div>
              <h2 className="mt-8 text-accent text-[18px] font-bold">
                Show Your Second Project:{" "}
              </h2>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white text-[15px] tracking-[.15em]">
                    ProjectName
                  </span>
                </label>
                <input
                  type="text"
                  {...register("secondProjectName")}
                  placeholder=""
                  className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text text-white text-[15px]">
                    Finishing Date
                  </span>
                </label>
                <input
                  type="date"
                  {...register("secondProjectDate")}
                  placeholder=""
                  className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white text-[15px] tracking-[.15em]">
                    Live Site
                  </span>
                </label>
                <input
                  type="link"
                  {...register("secondLiveSite")}
                  placeholder=""
                  className="input input-bordered bg-dark-mid text-white rounded-none h-[55px] w-full max-w-xs"
                />
              </div>
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Details
                </span>
              </label>
              <textarea
                {...register("secondProjectDetails")}
                className="textarea textarea-bordered  bg-dark-mid text-white rounded-none h-[100px] textarea-lg w-full max-w-xs"
                placeholder="details"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <button className="btn-all w-[200px] p-4 font-bold" type="submit">
            Submit
          </button>
          {/* <button
            className="btn-all p-4 font-bold"
            value="submit"
            type="submit"
          /> */}
        </div>
      </form>
    </div>
  );
};

export default BuildResume;
