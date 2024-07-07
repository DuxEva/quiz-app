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
  @Output() quizSelected = new EventEmitter<QuizItem>();
  currentQuestion: Question | undefined;
  currentQuestionIndex: number = 0;

  constructor(private quizDataService: QuizDataService) {}

  ngOnInit() {
    this.getQuizData();
  }

  getSelectedQuizData(quiz: QuizItem) {
    this.quizSelected.emit(quiz);
    this.selectedQuiz = quiz;
    this.updateCurrentQuestion({ question: quiz.questions[0], index: 0 });
  }

  getQuizData() {
    this.quizData = this.quizDataService.getQuizData();
  }

  updateCurrentQuestion(data: { question: Question; index: number }) {
    this.currentQuestion = data.question;
    this.currentQuestionIndex = data.index;
  }

  resetQuiz() {
    this.selectedQuiz = undefined;
    this.currentQuestion = undefined;
    this.currentQuestionIndex = 0;
  }

  updateTrackerWidth(index: number) {
    this.currentQuestionIndex = index;
    console.log('Tracker Width Updated, Index:', this.currentQuestionIndex);
  }
}
