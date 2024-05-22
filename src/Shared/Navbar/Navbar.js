/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Authprovider";
import { FcManager } from "react-icons/fc";
import { FiBarChart, FiBarChart2 } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    console.log("delete");
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* <div className="pt-6 pr-8 navbar shadow-lg shadow-[#20131c] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
              className="p-2 mt-3 menu menu-compact dropdown-content rounded-box w-52"
            >
              {user?.uid ? (
                <>
                  <li>
                    <Link>
                      <button
                        onClick={handleLogout}
                        className="px-6 py-2 mr-2 btn-all"
                      >
                        SignOut
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/signup">
                    <button className="px-6 py-2 mr-4 btn-all">Signup</button>
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
                  to="/interview"
                >
                  Interview
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
          <div className="flex items-center ml-12 ">
            <FiBarChart2 className="text-[22px]"></FiBarChart2>
            <Link to="/" className="btn btn-ghost normal-case text-[22px]">
              InnRecruit
            </Link>
          </div>
        </div>
        <div className="hidden navbar-end lg:flex">
          <div className="dropdown dropdown-end">
            <ul className="px-1 menu menu-horizontal">
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
                  to="/preparation"
                >
                  Preparation
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 transform hover:scale-110 text-[17px]"
                  to="/skill"
                >
                  skill-Test
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-accent-400 hover:underline duration-500 transform hover:scale-110 text-[17px]"
                  to="/community"
                >
                  community
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
                        className="px-6 py-2 mr-2 btn-all"
                      >
                        SignOut
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/signup">
                    <button className="px-6 py-2 mr-4 btn-all">Signup</button>
                  </Link>
                </li>
              )}
              <li tabIndex={0}>
                <a>
                  <div className="w-10 -mt-2 rounded-full hover:bg-dark-mid hover:outline-none">
                    <FcManager className="mt-2 text-4xl"></FcManager>
                  </div>
                </a>
                <ul className="p-2 mt-3 shadow menu menu-compact dropdown-content rounded-box w-52">
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
          </div>
        </div>
      </div> */}

      <nav class=" border-gray-200  pb-8 max-w-7xl mx-auto pt-10 shadow-lg shadow-[#20131c] pr-6 ">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" class="flex items-center">
            <Link to="/">
              {" "}
              <h3 className="text-[24px] flex gap-4 items-center font-bold">
                <FiBarChart /> InnRecruit
              </h3>
            </Link>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            // class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto lg:flex`}
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-[18px]">
              <li>
                <Link
                  to="/job"
                  class="block py-2 pl-3 pr-4  border-b border-gray-100  lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Job
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/internship"
                  class="block py-2 pl-3 pr-4  border-b   lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Intern
                </Link>
              </li> */}
              <li>
                <Link
                  to="/internship"
                  class="block py-2 pl-3 pr-4  border-b   lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Intern
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  class="block py-2 pl-3 pr-4  border-b   lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/skill"
                  class="block py-2 pl-3 pr-4  border-b  lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  skill Test
                </Link>
              </li>
              <li>
                <Link
                  to="resume"
                  class="block py-2 pl-3 pr-4  border-b  lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  resume
                </Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <Link>
                      <button
                        onClick={handleLogout}
                        className="px-6 py-2 mr-2 btn-all"
                      >
                        SignOut
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/signup">
                    <button className="px-6 py-2 mr-4 btn-all">Signup</button>
                  </Link>
                </li>
              )}

              <div class="relative inline-block text-left">
                <div class="group">
                  <div className="w-10 rounded-full hover:bg-dark-mid hover:outline-none">
                    <FcManager className="text-4xl "></FcManager>
                  </div>

                  <div class="absolute left-0 w-40 mt-1 origin-top-left  divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    <div class="py-1">
                      <li>
                        <Link to="/resume">My Resume</Link>
                      </li>
                      <li>
                        <Link to="/jobapplication">My Job Application</Link>
                      </li>
                      <li>
                        <Link to="/internapplication">
                          My Intern Application
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
