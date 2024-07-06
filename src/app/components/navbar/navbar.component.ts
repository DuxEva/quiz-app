import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { QuizDataService } from '@/app/service/quiz/quiz-data.service';
import { QuizItem } from '../../../types.common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges {
  @Input() selectedQuiz: QuizItem | undefined;
  courses: QuizItem[] = [];

  constructor(private quizDataService: QuizDataService) {}


  ngOnChanges() {
    if (this.selectedQuiz) {
      console.log(this.selectedQuiz, 'navbar');
    }
  }
}
