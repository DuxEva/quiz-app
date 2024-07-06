import { Component } from '@angular/core';
import { ThemeService } from './service/theme-service.service';
import { QuizDataService } from './service/quiz/quiz-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'quiz-app';

  constructor(
    private themeService: ThemeService,
    private quizDataservice: QuizDataService
  ) {}
}
