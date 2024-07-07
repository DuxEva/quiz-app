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
  @Output() quizReset = new EventEmitter<void>();
  @Output() quizCompleted = new EventEmitter<number>();
  currentQuestionIndex = 0;
  currentQuestion: Question | undefined;
  selectedOption: string | undefined;
  userAnswer: boolean | null = null;
  buttonLabel: string = 'Submit Answer';
  showResult = false;
  marks: number = 0;
  isSelected = false;

  constructor() {}

  ngOnChanges() {
    if (this.selectedQuiz) {
      this.currentQuestionIndex = 0;
      this.marks = 0; // Reset marks when a new quiz is selected
      this.loadCurrentQuestion();
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
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  submitOrNext() {
    if (!this.selectedOption && this.userAnswer === null) {
      this.isSelected = true;
      return;
    }

    if (this.userAnswer === null) {
      this.userAnswer = this.selectedOption === this.currentQuestion?.answer;
      if (this.userAnswer) {
        this.marks++;
      }
      this.buttonLabel = 'Next Question';
      this.isSelected = false;
    } else {
      if (this.currentQuestionIndex < this.selectedQuiz!.questions.length - 1) {
        this.currentQuestionIndex++;
        this.loadCurrentQuestion();
      } else {
        this.showResult = true;
        this.quizCompleted.emit(this.marks); // Emit the marks when quiz is completed
      }
    }
  }

  tryAgain() {
    this.currentQuestionIndex = 0;
    this.marks = 0;
    this.showResult = false;
    this.selectedOption = undefined;
    this.userAnswer = null;
    this.buttonLabel = 'Submit Answer';
    this.selectedQuiz = undefined;
    this.currentQuestion = undefined;
    this.quizReset.emit();
  }
}
