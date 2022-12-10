import { Action, createReducer, on } from '@ngrx/store';
import { QuizQuestion } from 'src/app/interfaces/quiz.interface';

export const quizFeatureKey = 'quiz';

export interface State {
  questions: Array<QuizQuestion>;
  totalScore: number;
  score: number;
  currentQuestion: null | QuizQuestion;
}

export const initialState: State = {
  questions: [],
  totalScore: 0,
  score: 0,
  currentQuestion: null,
};

export const reducer = createReducer(initialState);
