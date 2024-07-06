import { QuizDataService } from '@/app/service/quiz/quiz-data.service';
import { QuizItem } from '@/types.common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.css',
})
export class QuestionCardComponent {
  @Input() quizData: QuizItem[] = [];
  @Output() quizSelected = new EventEmitter<QuizItem>();
  showImage = false;

  constructor(private quizDataService: QuizDataService) {}

  // ngOnInit() {
  //   this.getQuizData();
  // }

  getSelectedQuizData(quiz: QuizItem) {
    this.quizSelected.emit(quiz);
  }

  // getQuizData() {
  //   this.quizData = this.quizDataService.getQuizData();
  // }
}