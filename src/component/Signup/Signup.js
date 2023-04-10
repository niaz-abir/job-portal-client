import React, { useContext } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { createuser } = useContext(AuthContext);
  const nevigate = useNavigate();

  const handlesignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        nevigate("/");
        toast.success("user created successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-auth pt-8 ">
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col   ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-sign font-bold">Sign up!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handlesignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sign">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="email"
                  name="name"
                  className=" w-80 h-12 p-2 focus:outline-pink-600 bg-dark-mid text-white "
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-sign">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className=" w-80 h-12 p-2 focus:outline-pink-600 bg-dark-mid text-white"
                ></input>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sign">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className=" w-80 h-12 p-2 focus:outline-pink-600 bg-dark-mid text-white "
                ></input>

                <label className="label">
                  <Link to="/login">
                    <h1 className="text-sign text-1xl  hover:text-white ">
                      Go to Login
                    </h1>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn-all p-4 font-bold mb-3">SignUp</button>
                <button className="btn-all p-4 font-bold">
                  SignWithGoogle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
