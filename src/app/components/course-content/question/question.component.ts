import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Question } from '@/types.common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnChanges {
  @Input() question: Question | undefined;
  @Input() index: number | undefined = 0;
  @Output() currentQuestionChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['question'] &&
      this.question !== undefined &&
      this.index !== undefined
    ) {
      this.question = changes['question'].currentValue;
      this.index = changes['index'].currentValue + 1;
      this.currentQuestionChange.emit(this.index);
      console.log('Current Question:', this.question, 'Index:', this.index);
    }
  }
}
