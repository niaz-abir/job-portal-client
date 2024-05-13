import React, { useState, useEffect } from "react";
import Question from "./Question";
import { SiMediamarkt } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { Link } from "react-router-dom";

const CssQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("/css.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswer = (selectedOption) => {
    setUserAnswers([...userAnswers, selectedOption]);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Quiz completed, calculate score
      const correctAnswers = questions.reduce((acc, question, index) => {
        return acc + (question.correctAnswer === userAnswers[index] ? 1 : 0);
      }, 0);
      setScore(`${correctAnswers}/${questions.length}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-[400px] mx-auto mt-14 h-[120vh]">
      {score ? (
        <div className="shadow-2xl shadow-dark-new">
          <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 ">
            <SiMediamarkt className="text-8xl" />
            <h2 className="text-2xl font-semibold leading-tight tracking-wide">
              <h2 className="font-bold">Your score is: {score}</h2>
            </h2>
            <p>Try to make good!</p>

            <Link to="/skill">
              <button type="button" className="px-8 py-3 font-bold btn-all">
                move on
              </button>
            </Link>
          </div>
          {/* You can render other components or navigate to a different page here */}
        </div>
      ) : (
        currentQuestion && (
          <>
            <h1 className="text-[20px] font-semibold flex gap-2 items-center text-accent-400">
              QUESTION ABOUT CSS
              <FaCss3 />
            </h1>
            <Question
              question={currentQuestion.question}
              no={currentQuestion.no}
              options={currentQuestion.options}
              handleAnswer={handleAnswer}
            />
          </>
        )
      )}
    </div>
  );
};

export default CssQuestion;
