import React, { useEffect } from "react";
import Question from "../components/Question";
import { useAppStore } from "../store";

const Home = () => {
  const { getQuestions, currentQuestion, score, answerQuestion, pickQuestion } =
    useAppStore(
      ({
        getQuestions,
        currentQuestion,
        score,
        answerQuestion,
        pickQuestion,
      }) => {
        return {
          getQuestions,
          currentQuestion,
          score,
          answerQuestion,
          pickQuestion,
        };
      }
    );
  const askedQuestionsLength = useAppStore((state) => {
    return state.questions.filter((question) => !!question.asked).length;
  });
  const totalQuestions = useAppStore((state) => {
    return state.questions.length;
  });
  useEffect(() => {
    getQuestions();
    pickQuestion();
  }, []);
  return (
    <div>
      <section className="mt-6">
        <div className="flex justify-between p-2">
          <div>Score: {score}</div>
          <div>
            {askedQuestionsLength + 1} / {totalQuestions}
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
      </section>
    </div>
  );
};

export default Home;
