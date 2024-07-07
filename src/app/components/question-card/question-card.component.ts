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
  @Input() userAnswer: boolean | null = null;
  @Output() answerSelected = new EventEmitter<string>();

  constructor() {}

  selectOption(option: string) {
    if (this.userAnswer === null) {
      this.answerSelected.emit(option);
    }
  }

  isCorrectOption(option: string): boolean {
    return this.userAnswer !== null && option === this.question?.answer;
  }

  isSelectedIncorrectOption(option: string): boolean {
    return (
      this.userAnswer !== null &&
      option === this.selectedOption &&
      option !== this.question?.answer
    );
  }
}
