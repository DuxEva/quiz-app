import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizItem } from '../../../types.common';
import { QuizDataService } from '../../service/quiz/quiz-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() quizData: QuizItem[] = [];
  @Output() quizSelected = new EventEmitter<QuizItem>();

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
