import { Component, Input, OnInit } from '@angular/core';
import { QuizDataService } from '../../service/quiz/quiz-data.service';
import { QuizItem } from '../../../types.common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  @Input()
  quizData: QuizItem[] = [];

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit() {
    this.getQuizData();
  }

  getSelectedQuizData(quiz: QuizItem) {
    this.quizDataService.getSelectedQuizData(quiz.title);
    console.log(this.quizData);
  }

  getQuizData() {
    this.quizData = this.quizDataService.getQuizData();
    console.log(this.quizData);
  }
}
