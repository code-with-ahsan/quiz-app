import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { logout } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/reducers';
import {
  selectIsLoggedIn,
  selectUsername,
} from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-header',
  template: `
    <header class="h-16 bg-slate-800 text-white w-full px-4">
      <nav class="w-full h-full flex justify-between items-center">
        <div class="logo">Quiz App Angular</div>
        <ng-container *ngIf="isLoggedIn$ | async">
          <div class="flex gap-4 items-center">
            <div class="profile">{{ username$ | async }}</div>
            <button
              (click)="logout()"
              class="px-3 text-slate-900 py-1 5 flex items-center justify-center"
            >
              Logout
            </button>
          </div>
        </ng-container>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  username$!: Observable<string>;
  isLoggedIn$!: Observable<boolean>;
  store: Store<AppState> = inject(Store<AppState>);
  constructor() {
    this.username$ = this.store.select(selectUsername);
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
  }

  logout() {
    this.store.dispatch(logout());
  }
}
