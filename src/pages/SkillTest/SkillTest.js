import React, { useState, useEffect } from "react";
import Question from "./Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("/quiz.json")
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
    <div>
      <h1>Quiz App</h1>
      {score ? (
        <div>
          <h2>Your score: {score}</h2>
          {/* You can render other components or navigate to a different page here */}
        </div>
      ) : (
        currentQuestion && (
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            handleAnswer={handleAnswer}
          />
        )
      )}
    </div>
  );
};

export default Quiz;
