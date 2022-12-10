import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromQuiz from './quiz.reducer';
import * as fromAuth from './auth.reducer';

export interface AppState {
  [fromQuiz.quizFeatureKey]: fromQuiz.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromQuiz.quizFeatureKey]: fromQuiz.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
