import React, { FC } from "react";

interface GameFinishedProps {
  retakeQuizHandler: () => void;
}

const GameFinished: FC<GameFinishedProps> = ({ retakeQuizHandler }) => {
  return (
    <div className="my-10 flex items-center flex-col justify-center gap-4">
      <h3 className="text-3xl">Quiz Finished</h3>
      <button
        onClick={retakeQuizHandler}
        className="cursor-pointer hover:bg-slate-300 hover:text-slate-800 duration-300 bg-slate-800 text-white rounded-md text-center p-2"
      >
        Retake Quiz
      </button>
    </div>
  );
};

export default GameFinished;
