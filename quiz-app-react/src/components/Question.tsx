import React, { FC } from "react";
import { QuizQuestion } from "../store";

interface QuestionComponent {
  question: QuizQuestion;
  answerSelected: (answerId: string) => void;
}

const Question: FC<QuestionComponent> = ({ question, answerSelected }) => {
  return (
    <article className="quiz p-4 bg-slate-100 boder border-slate-400 rounded-md">
      <h2 className="mb-4">{question.question}</h2>
      <ul className="grid grid-cols-2 gap-4">
        {Object.keys(question.answers).map((key) => {
          const answer = question.answers[key];
          return (
            <li
              onClick={() => {
                answerSelected(key);
              }}
              key={key}
              className="cursor-pointer hover:bg-slate-300 hover:text-slate-800 duration-300 bg-slate-800 text-white rounded-md text-center p-2"
            >
              {answer}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Question;
