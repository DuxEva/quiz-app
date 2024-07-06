import { Injectable } from '@angular/core';
import { QuizItem } from '../../../types.common';
import DATA from '@/data.json';

@Injectable({
  providedIn: 'root',
})
export class QuizDataService {
  quizData: QuizItem[] = [];

  constructor() {}

  getQuizData(): QuizItem[] {
    this.quizData = DATA.quizzes;
    return this.quizData;
  }

  getSelectedQuizData(title: string): QuizItem | undefined {
    return this.quizData.find((quiz) => quiz.title === title);
  }
}
