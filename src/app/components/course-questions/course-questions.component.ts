import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { QuizItem, Question } from '@/types.common';

@Component({
  selector: 'app-course-questions',
  templateUrl: './course-questions.component.html',
  styleUrls: ['./course-questions.component.css'],
})
export class CourseQuestionsComponent implements OnChanges {
  @Input() selectedQuiz: QuizItem | undefined;
  @Output() currentQuestionChange = new EventEmitter<{
    question: Question;
    index: number;
  }>();
  currentQuestionIndex = 0;
  currentQuestion: Question | undefined;
  selectedOption: string | undefined;
  userAnswer: boolean | null = null;
  buttonLabel: string = 'Submit Answer';
  showResult = false;

  constructor() {}

  ngOnChanges() {
    if (this.selectedQuiz) {
      this.currentQuestionIndex = 0;
      this.loadCurrentQuestion();
      console.log('selectedQuiz:', this.selectedQuiz);
    }
  }

  loadCurrentQuestion() {
    this.currentQuestion =
      this.selectedQuiz?.questions[this.currentQuestionIndex];
    this.selectedOption = undefined;
    this.userAnswer = null;
    this.buttonLabel = 'Submit Answer';
    this.currentQuestionChange.emit({
      question: this.currentQuestion!,
      index: this.currentQuestionIndex,
    });
    console.log('Loaded current question:', this.currentQuestion);
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  submitOrNext() {
    if (!this.selectedOption && this.userAnswer === null) {
      console.log('Please select an option before submitting.');
      return;
    }

    if (this.userAnswer === null) {
      // Check the answer and show feedback
      this.userAnswer = this.selectedOption === this.currentQuestion?.answer;
      this.buttonLabel = 'Next Question';
    } else {
      // Move to the next question or show results
      if (this.currentQuestionIndex < this.selectedQuiz!.questions.length - 1) {
        this.currentQuestionIndex++;
        this.loadCurrentQuestion();
      } else {
        this.showResult = true;
      }
    }
  }

  isOptionCorrect(option: string): boolean {
    return !!this.userAnswer && option === this.currentQuestion?.answer;
  }

  isOptionSelected(option: string): boolean {
    return this.selectedOption === option;
  }
}
