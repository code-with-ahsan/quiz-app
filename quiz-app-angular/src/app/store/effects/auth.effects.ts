import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  storageKey = 'quiz-app-user';
  router = inject(Router);
  constructor(private actions$: Actions) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('@ngrx/effects/init'),
      map(() => {
        const username = localStorage.getItem(this.storageKey) || '';
        return AuthActions.setUsername({ username });
      })
    )
  );

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          localStorage.setItem(this.storageKey, action.username);
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem(this.storageKey);
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
}
