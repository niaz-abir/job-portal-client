import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider";
import { FcManager } from "react-icons/fc";
import { FiBarChart2 } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    console.log("delete");
  };
  return (
    <div>
      <div className="navbar pt-6 pr-8 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52"
            >
              {user?.uid ? (
                <>
                  <li>
                    <Link>
                      <button
                        onClick={handleLogout}
                        className="btn-all mr-2 px-6 py-2"
                      >
                        SignOut
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/signup">
                    <button className="btn-all  px-6 py-2 mr-4">Signup</button>
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 transform hover:scale-110 text-[17px]"
                  to="/blogs"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 transform hover:scale-110 text-[17px]"
                  to="/internship"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 transform hover:scale-110 text-[17px]"
                  to="/job"
                >
                  Job
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-12 flex items-center ">
            <FiBarChart2 className="text-[22px]"></FiBarChart2>
            <Link to="/" className="btn btn-ghost normal-case text-[22px]">
              InnRecruit
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/internship">Internships</Link>
            </li>
            <li>
              <Link to="/job">Job</Link>
            </li>
            <Link>
              <button className="btn-all px-6 py-2">SignOut</button>
            </Link>

            <Link to="/signup">
              <button className="btn-all  px-6 py-2 mr-4">Signup</button>
            </Link>
          </ul> */}
          <div className="dropdown dropdown-end">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 transform hover:scale-110 text-[17px]"
                  to="/blogs"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 transform hover:scale-110 text-[17px]"
                  to="/internship"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 mr-8 transform hover:scale-110 text-[17px]"
                  to="/job"
                >
                  Job
                </Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <Link>
                      <button
                        onClick={handleLogout}
                        className="btn-all mr-2 px-6 py-2"
                      >
                        SignOut
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/signup">
                    <button className="btn-all  px-6 py-2 mr-4">Signup</button>
                  </Link>
                </li>
              )}
              <li tabIndex={0}>
                <a>
                  <div className="w-10 rounded-full -mt-2 hover:bg-dark-mid hover:outline-none">
                    <FcManager className="text-4xl mt-2"></FcManager>
                  </div>
                </a>
                <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                  <li>
                    <Link to="/resume">My Resume</Link>
                  </li>
                  <li>
                    <Link to="/jobapplication">My Job Application</Link>
                  </li>
                  <li>
                    <Link to="/internapplication">My Intern Application</Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <FcManager className="text-4xl mt-2"></FcManager>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/resume">My Resume</Link>
              </li>
              <li>
                <Link to="/jobapplication">My Job Application</Link>
              </li>
              <li>
                <Link to="/internapplication">My Intern Application</Link>
              </li>
            </ul> */}
          </div>
        </div>
        {/* <div className="navbar-end">
          <div className="dropdown dropdown-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/internship">Internships</Link>
            </li>
            <li>
              <Link to="/job">Job</Link>
            </li>
            <Link>
              <button className="btn-all px-6 py-2">SignOut</button>
            </Link>

            <Link to="/signup">
              <button className="btn-all  px-6 py-2 mr-4">Signup</button>
            </Link>
          </ul>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <FcManager className="text-4xl "></FcManager>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/resume">My Resume</Link>
              </li>
              <li>
                <Link to="/jobapplication">My Job Application</Link>
              </li>
              <li>
                <Link to="/internapplication">My Intern Application</Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
