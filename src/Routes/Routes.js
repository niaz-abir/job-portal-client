import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home/Home";
import Job from "../pages/Job/Job/Job";
import Login from "../component/Login/Login";
import Signup from "../component/Signup/Signup";
import Main from "../layout/Main";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Internship from "../pages/Internships/Internships/Internships/Internship";
import BuildResume from "../pages/BuildResume/BuildResume";
import MyResume from "../pages/MyResume/MyResume";
import MyApplication from "../pages/MyApplication/MyApplication";
import Blogs from "../pages/Blogs/Blogs";
import JobApply from "../pages/Job/JobApply/JobApply";
import BlogDetails from "../pages/Blogs/BlogDetails";
import InternApply from "../pages/Internships/InternApply/InternApply";
import MyJobApplication from "../pages/Job/MyJobApplication/MyJobApplication";
import MyInternApplication from "../pages/Internships/MyInternApplication/MyInternApplication";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      // { path: "/footer", element: <Footer></Footer> },
      // { path: "/footer", element: <Footer></Footer> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/job", element: <Job></Job> },
      { path: "/internship", element: <Internship></Internship> },
      { path: "/buildresume", element: <BuildResume></BuildResume> },
      { path: "/resume", element: <MyResume></MyResume> },
      { path: "/application", element: <MyApplication></MyApplication> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/jobapply/:id", element: <JobApply></JobApply> },
      {
        path: "/jobapplication",
        element: <MyJobApplication></MyJobApplication>,
      },
      { path: "/internapply/:id", element: <InternApply></InternApply> },
      {
        path: "/internapplication",
        element: <MyInternApplication></MyInternApplication>,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
]);
export default routes;
