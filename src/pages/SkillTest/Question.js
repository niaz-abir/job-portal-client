import React from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";

const Question = ({ question, options, handleAnswer, no }) => {
  return (
    <section className=" max-w-[650px] h-[100vh]  mx-auto mt-4">
      <div>
        <h2 className="flex items-center gap-2 p-4 text-2xl font-bold border-2 rounded-md border-accent-400 bg-dark-deep">
          {no}.{question}
        </h2>
        <ul className="mt-6 ml-2">
          {options.map((option, index) => (
            <div className="flex items-center gap-2 text-[20px]  shadow-xl p-4 m-2 shadow-dark-new transition duration-300 ease-in-out transform hover:scale-105 hover:bg-accent-400 rounded-lg cursor-pointer">
              <IoIosOptions />
              <li key={index} onClick={() => handleAnswer(option)}>
                {option}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Question;
