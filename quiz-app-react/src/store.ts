import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const quizzesURL =
  "https://gist.githubusercontent.com/AhsanAyaz/7d9d0a0949308716725794bf90266cf7/raw/c433c816e22686ed2dc688efbe8dcb8500230034/javascript-questions.json";

const SCORE_PER_QUESTION = 5;

export interface AppStore {
  username: string | null;
  setUsername: (username: string | null) => void;
}

export interface QuizQuestion {
  id: string;
  correctAnswerId: string;
  answers: Record<string, string>;
  asked: boolean;
  question: string;
}

export interface AppStore {
  questions: Array<QuizQuestion>;
  totalScore: number;
  score: number;
  currentQuestion: null | QuizQuestion;
  pickQuestion: (questions?: QuizQuestion[]) => void;
  getQuestions: () => void;
  answerQuestion: (question: QuizQuestion, answerId: string) => void;
}

const questionsAsked = (questions: QuizQuestion[]) => {
  return questions.filter((question) => !!question.asked);
};

const questionsRemaining = (questions: QuizQuestion[]) => {
  return questions.filter((question) => !question.asked);
};

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        username: "",
        setUsername: (username) => set(() => ({ username: username })),
        questions: [],
        currentQuestion: null,
        totalScore: 0,
        score: 0,
        getQuestions: async () => {
          const response = await fetch(quizzesURL);
          const questions = await response.json();
          set(() => {
            return {
              totalScore: questions.length * SCORE_PER_QUESTION,
              questions: questions as QuizQuestion[],
            };
          });
        },
        answerQuestion: (question: QuizQuestion, answerId: string) => {
          set((state) => {
            let scoreToAdd = 0;
            if (question.correctAnswerId === answerId) {
              scoreToAdd = 5;
            }
            return {
              score: (state.score += scoreToAdd),
              questions: state.questions.map((q) => {
                if (q.id === question.id) {
                  return {
                    ...question,
                    asked: true,
                  };
                }
                return q;
              }),
            };
          });
        },
        pickQuestion: () =>
          set((state) => {
            const questions = questionsRemaining(state.questions);
            const randomIndex = Math.floor(Math.random() * questions.length);
            const randomQuestion = questions[randomIndex];
            return {
              ...state,
              currentQuestion: randomQuestion,
            };
          }),
      }),
      {
        name: "quiz-app",
      }
    )
  )
);
