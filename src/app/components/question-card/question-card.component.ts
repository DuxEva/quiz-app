import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '@/types.common';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
})
export class QuestionCardComponent {
  @Input() question: Question | undefined;
  @Input() selectedOption: string | undefined;
  @Input() userAnswer: boolean | undefined;
  @Output() answerSelected = new EventEmitter<string>();

  constructor() {}

  selectOption(option: string) {
    this.answerSelected.emit(option);
  }
}
