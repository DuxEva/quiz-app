import { QuizDataService } from '@/app/service/quiz/quiz-data.service';
import { QuizItem } from '@/types.common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-topic',
  templateUrl: './quiz-topic.component.html',
  styleUrl: './quiz-topic.component.css',
})
export class QuizTopicComponent implements OnInit {
  @Input() quizData: QuizItem[] = [];
  @Output() quizSelected = new EventEmitter<QuizItem>();
  showImage = false;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit() {
    this.getQuizData();
  }

  emitSelectedQuizData(quiz: QuizItem) {
    this.quizSelected.emit(quiz);
  }

  getQuizData() {
    this.quizData = this.quizDataService.getQuizData();
  }
}
