import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from '@/types.common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnChanges {
  @Input() question: Question | undefined;
  @Input() index: number | undefined = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['question'] &&
      this.question !== undefined &&
      this.index !== undefined
    ) {
      this.question = changes['question'].currentValue;
      this.index = changes['index'].currentValue + 1;
      console.log('Current Question:', this.question, 'Index:', this.index);
    }
  }
}
