import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-finished',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="my-10 flex items-center flex-col justify-center gap-4">
      <h3 class="text-3xl">Quiz Finished</h3>
      <button
        class="cursor-pointer hover:bg-slate-300 hover:text-slate-800 duration-300 bg-slate-800 text-white rounded-md text-center p-2"
      >
        Retake Quiz
      </button>
    </div>
  `,
  styles: [],
})
export class GameFinishedComponent {}
