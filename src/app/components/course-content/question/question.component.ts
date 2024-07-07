import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Question, QuizItem } from '@/types.common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnChanges {
  @Input() question: Question | undefined;
  @Input() index: number | undefined = 0;
  @Input() selectedQuiz: QuizItem | undefined;

  @Output() currentQuestionChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['question'] &&
      this.question !== undefined &&
      changes['index'] &&
      changes['index'].currentValue !== undefined
    ) {
      this.question = changes['question'].currentValue;
      this.index = changes['index'].currentValue;
      this.currentQuestionChange.emit(this.index);
    }
  }
}
