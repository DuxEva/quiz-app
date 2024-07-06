import { Component, Input, OnChanges } from '@angular/core';
import { QuizItem } from '../../../types.common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges {
  @Input() selectedQuiz: QuizItem | undefined;

  constructor() {}

  ngOnChanges() {
    if (this.selectedQuiz) {
      console.log(this.selectedQuiz, 'navbar');
    }
  }
}
