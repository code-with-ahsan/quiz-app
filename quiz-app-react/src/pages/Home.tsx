import React, { useEffect, useState } from "react";
import GameFinished from "../components/GameFinished";
import Question from "../components/Question";
import { useAppStore } from "../store";

const Home = () => {
  const {
    getQuestions,
    currentQuestion,
    score,
    answerQuestion,
    pickQuestion,
    resetQuiz,
  } = useAppStore(
    ({
      getQuestions,
      currentQuestion,
      score,
      answerQuestion,
      pickQuestion,
      resetQuiz,
    }) => {
      return {
        getQuestions,
        currentQuestion,
        score,
        answerQuestion,
        pickQuestion,
        resetQuiz,
      };
    }
  );
  const [isGameFinished, setIsGameFinished] = useState(false);
  const askedQuestionsLength = useAppStore((state) => {
    return state.questions.filter((question) => !!question.asked).length;
  });
  const totalQuestionsLength = useAppStore((state) => {
    return state.questions.length;
  });

  useEffect(() => {
    resetQuiz();
    getQuestions();
    pickQuestion();
  }, []);

  useEffect(() => {
    setIsGameFinished(
      totalQuestionsLength > 0 &&
        askedQuestionsLength > 0 &&
        totalQuestionsLength === askedQuestionsLength
    );
  }, [askedQuestionsLength, totalQuestionsLength]);

  return (
    <div>
      <section className="mt-6">
        <div className="flex justify-between p-2">
          <div>Score: {score}</div>
          <div>
            {askedQuestionsLength} / {totalQuestionsLength}
          </div>
        </div>
        {currentQuestion && (
          <Question
            answerSelected={(selectedAnswerId: string) => {
              answerQuestion(currentQuestion, selectedAnswerId);
              pickQuestion();
            }}
            question={currentQuestion}
          />
        )}
        {isGameFinished && (
          <GameFinished
            retakeQuizHandler={() => {
              resetQuiz();
            }}
          />
        )}
      </section>
    </div>
  );
};

export default Home;
