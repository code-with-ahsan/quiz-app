import { createAction, props } from '@ngrx/store';

export const quizQuizs = createAction(
  '[Quiz] Quiz Quizs'
);

export const quizQuizsSuccess = createAction(
  '[Quiz] Quiz Quizs Success',
  props<{ data: any }>()
);

export const quizQuizsFailure = createAction(
  '[Quiz] Quiz Quizs Failure',
  props<{ error: any }>()
);
