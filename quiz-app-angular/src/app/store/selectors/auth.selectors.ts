import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuth = (state: AppState) => state.auth;

export const selectUsername = createSelector(
  selectAuth,
  (state: fromAuth.State) => state.username
);

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state: fromAuth.State) => !!state.username
);
