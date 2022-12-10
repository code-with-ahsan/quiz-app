import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestion } from 'src/app/interfaces/quiz.interface';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="quiz p-4 bg-slate-100 boder border-slate-400 rounded-md">
      <h2 class="mb-4">{{ question.question }}</h2>
      <ul class="grid grid-cols-2 gap-4">
        <li
          *ngFor="let answer of question.answers | keyvalue"
          class="cursor-pointer hover:bg-slate-300 hover:text-slate-800 duration-300 bg-slate-800 text-white rounded-md text-center p-2"
        >
          {{ answer.value }}
        </li>
      </ul>
    </article>
  `,
  styles: [],
})
export class QuestionComponent {
  @Input() question!: QuizQuestion;
}
