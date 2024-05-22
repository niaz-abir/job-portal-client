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
import Preparation from "../component/Preparations/Preparation/Preparation";
import Interview from "../pages/Interviews/Interview/Interview";
import SkillTest from "../pages/SkillTest/SkillTest";
import Community from "../pages/Community/Community";
import AllSkillTest from "../pages/SkillTest/AllSkillTest";
import ReactQuestion from "../pages/SkillTest/react";
import VueQuestion from "../pages/SkillTest/vue";
import CssQuestion from "../pages/SkillTest/css";
import GitQuestion from "../pages/SkillTest/git";
import LaravelQuestion from "../pages/SkillTest/laravel";
import PythonQuestion from "../pages/SkillTest/python";
import PhpQuestion from "../pages/SkillTest/php";
import SassQuestion from "../pages/SkillTest/sass";
import WordpressQuestion from "../pages/SkillTest/wordpress";
import PrismaQuestion from "../pages/SkillTest/prisma";
import NodejsQuestion from "../pages/SkillTest/nodejs";
import JavaQuestion from "../pages/SkillTest/java";
import TailwindQuestion from "../pages/SkillTest/QuestionTailwind";
import FlutterQuestion from "../pages/SkillTest/flutter";
import FigmaQuestion from "../pages/SkillTest/figma";
import JavascriptQuestion from "../pages/SkillTest/javascript";
import Intern from "../pages/Intern/Intern";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },

      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/job", element: <Job></Job> },
      { path: "/internship", element: <Internship></Internship> },
      { path: "/buildresume", element: <BuildResume></BuildResume> },
      { path: "/resume", element: <MyResume></MyResume> },
      { path: "/application", element: <MyApplication></MyApplication> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/jobapply/:id", element: <JobApply></JobApply> },
      { path: "/preparation", element: <Preparation></Preparation> },
      { path: "/interview", element: <Interview></Interview> },
      { path: "/community", element: <Community /> },
      { path: "/skill", element: <AllSkillTest /> },
      { path: "/react", element: <ReactQuestion /> },
      { path: "/vue", element: <VueQuestion /> },
      { path: "/css", element: <CssQuestion /> },
      { path: "/git", element: <GitQuestion /> },
      { path: "/sass", element: <SassQuestion /> },
      { path: "/php", element: <PhpQuestion /> },
      { path: "/python", element: <PythonQuestion /> },
      { path: "/laravel", element: <LaravelQuestion /> },
      { path: "/wordpress", element: <WordpressQuestion /> },
      { path: "/prisma", element: <PrismaQuestion /> },
      { path: "/nodejs", element: <NodejsQuestion /> },
      { path: "/java", element: <JavaQuestion /> },
      { path: "/tailwind", element: <TailwindQuestion /> },
      { path: "/flutter", element: <FlutterQuestion /> },
      { path: "/Figma", element: <FigmaQuestion /> },
      { path: "/javascript", element: <JavascriptQuestion /> },

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
