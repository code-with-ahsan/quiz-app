import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string }>()
);

export const setUsername = createAction(
  '[Auth] Set Username',
  props<{ username: string }>()
);

export const logout = createAction('[Auth] Logout');
