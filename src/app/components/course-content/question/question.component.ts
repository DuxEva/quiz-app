import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuizItem, Question } from '@/types.common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnChanges {
  @Input() selectedQuiz: QuizItem | undefined;
  currentQuestionIndex = 0;
  currentQuestion: Question | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedQuiz'] && this.selectedQuiz) {
      this.currentQuestionIndex = 0;
      this.loadCurrentQuestion();
    }
  }

  loadCurrentQuestion() {
    this.currentQuestion =
      this.selectedQuiz!.questions[this.currentQuestionIndex];
      console.log('Current question:', this.currentQuestion)
  }

  nextQuestion() {
    if (
      this.selectedQuiz &&
      this.currentQuestionIndex < this.selectedQuiz.questions.length - 1
    ) {
      this.currentQuestionIndex++;
      this.loadCurrentQuestion();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.loadCurrentQuestion();
    }
  }

  onAnswerSelected(option: string) {
    console.log('Selected option:', option);
  }
}
