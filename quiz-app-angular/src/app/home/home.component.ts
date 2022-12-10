import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from '../components/question/question.component';
import { GameFinishedComponent } from '../components/game-finished/game-finished.component';
import { QuizQuestion } from '../interfaces/quiz.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, QuestionComponent, GameFinishedComponent],
  template: `
    <div>
      <section class="mt-6">
        <div class="flex justify-between p-2">
          <div>Score: 0</div>
          <div>0 / 10</div>
        </div>
        <ng-container *ngIf="!isGameFinished && currentQuestion">
          <app-question [question]="currentQuestion" answerSelected="">
          </app-question>
        </ng-container>
        <ng-container *ngIf="isGameFinished">
          <app-game-finished retakeQuizHandler=""> </app-game-finished>
        </ng-container>
      </section>
    </div>
  `,
  styles: [],
})
export class HomeComponent {
  currentQuestion!: QuizQuestion;
  isGameFinished = true;
  questions: QuizQuestion[] = [
    {
      question: 'Which is the purpose of JavaScript?',
      answers: {
        '1': 'To style HTML Pages',
        '2': 'To add interactivity to HTML pages',
        '3': 'To perform server side scripting operations',
      },
      correctAnswerId: '2',
      id: '1',
    },
    {
      question: 'To insert a JavaScript into an HTML page, which tag is used?',
      answers: {
        '1': "<script='java'>",
        '2': '<javascript>',
        '3': '<script>',
      },
      correctAnswerId: '3',
      id: '2',
    },
    {
      question:
        'Which of the following is correct to write “Hello World” on the web page?',
      answers: {
        '1': "print('Hello World')",
        '2': "document.write('Hello World')",
        '3': "response.write('Hello World')",
      },
      correctAnswerId: '2',
      id: '3',
    },
  ];

  ngOnInit() {
    this.currentQuestion = this.questions[0];
  }
}
