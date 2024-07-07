import { Component, OnInit } from '@angular/core';
import { QuizDataService } from './service/quiz/quiz-data.service';
import { QuizItem } from '@/types.common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quizData: QuizItem[] = [];
  selectedQuiz: QuizItem | undefined;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit() {
    this.quizData = this.quizDataService.getQuizData();
  }

  onQuizSelected(quiz: QuizItem) {
    this.selectedQuiz = quiz;
  }

  onQuizReset() {
    this.selectedQuiz = undefined;
  }
}
