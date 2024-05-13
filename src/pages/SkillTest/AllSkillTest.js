import React from "react";
import ReactQuestion from "./react";
//   {/* <ReactQuestion /> */}
import { RiReactjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPython } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";

const AllSkillTest = () => {
  const allSkill = [
    {
      id: 1,
      name: "React",
      move: "react",
      icon: <RiReactjsFill />,
    },
    {
      id: 2,
      name: "Vue",
      move: "vue",
      icon: <FaVuejs />,
    },
    {
      id: 3,
      name: "Git",
      move: "git",
      icon: <FaGithub />,
    },
    {
      id: 4,
      name: "Css",
      move: "css",
      icon: <FaCss3Alt />,
    },
    {
      id: 5,
      name: "Php",
      move: "php",
      icon: <FaPhp />,
    },
    {
      id: 6,
      name: "Laravel",
      move: "laravel",
      icon: <FaLaravel />,
    },
    {
      id: 7,
      name: "Python",
      move: "python",
      icon: <FaPython />,
    },
    {
      id: 8,
      name: "Sass",
      move: "sass",
      icon: <FaSass />,
    },
    {
      id: 9,
      name: "Wordpress",
      move: "wordpress",
      icon: <FaWordpress />,
    },
    {
      id: 10,
      name: "Prisma",
      move: "prisma",
      icon: <SiPrisma />,
    },
    {
      id: 11,
      name: "Java",
      move: "java",
      icon: <FaJava />,
    },
    {
      id: 12,
      name: "Nodejs",
      move: "nodejs",
      icon: <DiNodejs />,
    },
    {
      id: 13,
      name: "Flutter",
      move: "flutter",
      icon: <TbBrandFlutter />,
    },
    {
      id: 14,
      name: "Figma",
      move: "figma",
      icon: <FaFigma />,
    },
    {
      id: 15,
      name: "Tailwind",
      move: "tailwind",
      icon: <SiTailwindcss />,
    },
    {
      id: 16,
      name: "Javascript",
      move: "javascript",
      icon: <IoLogoJavascript />,
    },
  ];
  return (
    <section className=" h-[190vh] lg:h-[100vh] max-w-5xl mx-auto  mt-10">
      <h1 className="pb-10 text-4xl font-bold text-center">
        Quiz yourself,hone your skills!!
      </h1>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {allSkill?.map((skill) => (
          <Link to={`/${skill?.move}`}>
            <div className=" ">
              <h1 className="flex items-center  gap-4 mr-4 p-6  relative z-10 text-3xl shadow-2xl shadow-dark-new  bg-dark-deep w-[200px] ml-4 lg:ml-2 lg:w-[240px] justify-center ">
                {skill?.icon} {skill?.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllSkillTest;
