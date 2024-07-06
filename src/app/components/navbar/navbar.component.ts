import { Component, OnInit } from '@angular/core';
import { QuizDataService } from '@/app/service/quiz/quiz-data.service';
import { QuizItem } from '../../../types.common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  courses: QuizItem[] = [];

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit() {
    this.getQuizData();
  }

  getQuizData() {
    console.log(this.courses, 'navbar');
    return (this.courses = this.quizDataService.getQuizData());
  }

  getSelectedQuizData(title: string) {
    const selectedQuiz = this.quizDataService.getSelectedQuizData(title);
    console.log(selectedQuiz, 'navbar');
  }
}
