import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question, QuizItem } from '../../../types.common';
import { QuizDataService } from '../../service/quiz/quiz-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() quizData: QuizItem[] = [];
  @Input() selectedQuiz: QuizItem | undefined;
  @Input() questions: Question[] = [];
  @Output() quizSelected = new EventEmitter<QuizItem>();
  currentQuestion: Question | undefined;
  currentQuestionIndex: number | undefined;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit() {
    this.getQuizData();
  }

  getSelectedQuizData(quiz: QuizItem) {
    this.quizSelected.emit(quiz);
    this.selectedQuiz = quiz;
    this.questions = quiz.questions;
    this.updateCurrentQuestion({ question: this.questions[0], index: 0 }); // Set the first question as the current question
    console.log('Selected questions:', this.questions);
  }

  getQuizData() {
    this.quizData = this.quizDataService.getQuizData();
  }

  updateCurrentQuestion(data: { question: Question; index: number }) {
    this.currentQuestion = data.question;
    this.currentQuestionIndex = data.index;
    console.log(
      'Current question updated:',
      this.currentQuestion,
      'Index:',
      this.currentQuestionIndex
    );
  }
}
