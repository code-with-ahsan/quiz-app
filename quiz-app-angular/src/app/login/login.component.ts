import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { login } from '../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-md mx-auto my-16">
      <div class="rounded-md shadow-md bg-white p-4">
        <h1 class="text-2xl mb-4">Login</h1>
        <form
          (submit)="formSubmit(username, $event)"
          class="flex gap-4 flex-col justify-end"
        >
          <input
            type="text"
            name="username"
            [(ngModel)]="username"
            placeholder="Enter your name. We super secure! ⚠"
            class="w-full sm:flex items-center text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          />
          <button
            type="submit"
            [disabled]="!username"
            class="px-3 py-1 5 flex items-center justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class LoginComponent {
  username = '';
  store: Store<AppState> = inject(Store<AppState>);
  formSubmit(username: string, $event: SubmitEvent) {
    $event.preventDefault();
    this.store.dispatch(login({ username }));
  }
}
