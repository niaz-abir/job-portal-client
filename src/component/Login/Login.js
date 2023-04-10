import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider";
import "./Login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-auth pt-8">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col  ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-sign font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sign mb-1">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className=" w-80 h-12 p-2 focus:outline-pink-600 bg-dark-mid text-white"
                ></input>

                {/* <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input bg-gray-300  "
                /> */}
              </div>
              <div className="from-control">
                <span className="text-sign pb-2 mb-2">password</span>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className=" w-80 h-12 p-2  mt-2 focus:outline-pink-600 bg-dark-mid text-white "
                ></input>
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-sign">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input bg-gray-300  input-bordered"
                />
                <label className="label">
                  <Link to="/signup">
                    <h1 className="text-sign text-1xl  hover:text-white ">
                      Forget password ?
                    </h1>
                  </Link>
                </label>
              </div> */}
              <label className="label">
                <Link to="/signup">
                  <h1 className="text-sign text-1xl  hover:text-white ">
                    Forget Password?
                  </h1>
                </Link>
              </label>

              <div className="form-control mt-6">
                <button className=" btn-all p-4 font-bold">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
