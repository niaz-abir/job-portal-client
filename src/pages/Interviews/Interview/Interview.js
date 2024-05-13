import React, { useEffect, useState } from "react";

const Interview = () => {
  const [data, setData] = useState();
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetch("skill.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleAnswerClick = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;

    data.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer === question.correct_ans) {
        score += 1;
      }
    });

    return score;
  };

  return (
    <div className="flex justify-center w-[500px] mx-auto">
      <div className="container p-4 mx-auto text-white">
        <h1 className="mb-4 text-3xl font-bold">Job Portal Quiz</h1>
        {data?.map((question) => (
          <div key={question.id} className="mb-8">
            <p className="mb-2 text-lg font-bold ">{question.question_name}</p>
            <ul className="pl-0 list-none shadow-md mb-4 shadow-[#46367c]">
              {["option_1", "option_2", "option_3", "option_4"].map(
                (option) => (
                  <li
                    key={option}
                    className={`cursor-pointer font-semibold p-3 border  mb-2 text-[20px] ${
                      userAnswers[question.id] === question[option]
                        ? userAnswers[question.id] === question.correct_ans
                          ? "bg-green-500"
                          : "bg-red-500"
                        : "hover:bg-accent-400"
                    }`}
                    onClick={() =>
                      handleAnswerClick(question.id, question[option])
                    }
                  >
                    {question[option]}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
        {/* The button to open modal */}
        <label
          className="px-24 py-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={handleSubmit}
          htmlFor="my_modal_6"
        >
          Submit
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="text-black modal-box">
            <div>
              {showResults && (
                <div className="mt-4">
                  <h2 className="mb-2 text-xl font-bold">Results</h2>
                  <p>Total Score: {calculateScore()}</p>
                </div>
              )}
            </div>

            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>

        {/* <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button> */}
        {showResults && (
          <div className="mt-4">
            <h2 className="mb-2 text-xl font-bold">Results</h2>
            <p>Total Score: {calculateScore()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interview;
