import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizDataService } from '@/app/service/quiz/quiz-data.service';
import { QuizItem } from '@/types.common';

@Component({
  selector: 'app-course-questions',
  templateUrl: './course-questions.component.html',
  styleUrl: './course-questions.component.css',
})
export class CourseQuestionsComponent implements OnInit {
  @Input() quizData: QuizItem[] = [];
  @Output() quizSelected = new EventEmitter<QuizItem>();
  showImage = false;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit() {
    this.getQuizData();
  }

  getSelectedQuizData(quiz: QuizItem) {
    this.quizSelected.emit(quiz);
  }

  getQuizData() {
    this.quizData = this.quizDataService.getQuizData();
  }
}
