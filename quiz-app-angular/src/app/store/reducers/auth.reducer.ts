import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  username: string;
}

export const initialState: State = {
  username: '',
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, (state: State, action) => {
    return {
      ...state,
      username: action.username,
    };
  }),
  on(AuthActions.setUsername, (state: State, action) => {
    return {
      ...state,
      username: action.username,
    };
  }),
  on(AuthActions.logout, (state: State, action) => {
    return {
      ...state,
      username: '',
    };
  })
);
