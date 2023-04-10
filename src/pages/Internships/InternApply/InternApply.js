import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Context/Authprovider";
import { toast } from "react-hot-toast";

const InternApply = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const [apply, setApply] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://job-portal-server-mocha.vercel.app/interns/intern/${id}`)
      .then((res) => res.json())
      .then((data) => setApply(data));
  }, [id]);

  const handleApply = (data) => {
    const apply = {
      job: data.job,
      company: data.company,
      hire: data.hire,
      experience: data.experience,
      email: data?.email,
    };
    fetch("https://job-portal-server-mocha.vercel.app/internapply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(apply),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("apply successfully");
          reset();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleApply)} className="h-[200vh] mt-14">
        <div className="flex  justify-center mb-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="mb-2">
              <label>job Title : </label>
              <input
                className=" rounded-none bg-dark-mid text-white p-2"
                // name="firstName"
                defaultValue={apply?.intern_name}
                readOnly
                {...register("job", { required: true })}
              />
            </div>
            <div>
              <label>Company : </label>
              <input
                className=" rounded-none bg-dark-mid text-white  p-2"
                // name="lastName"
                defaultValue={apply?.company}
                readOnly
                {...register("company", { required: true })}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <div>
            <label>Email : </label>
            <input
              className=" rounded-none bg-dark-mid text-white mt-3  p-2"
              // name="lastName"
              defaultValue={user?.email}
              readOnly
              {...register("email", { required: true })}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <div>
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Why should you be hired for this role?
                </span>
              </label>
              <textarea
                {...register("hire")}
                className="textarea textarea-bordered bg-dark-mid text-white rounded-none h-[100px] w-[370px] lg:w-[600px] "
                placeholder="..."
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white text-[15px] tracking-[.15em]">
                  Do You Have Any Experience?
                </span>
              </label>
              <textarea
                {...register("experience")}
                className="textarea textarea-bordered bg-dark-mid text-white rounded-none h-[100px] w-[370px] lg:w-[600px] "
                placeholder="..."
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <button
            className="btn-all  w-[250px] lg:w-[200px] p-4 font-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InternApply;
