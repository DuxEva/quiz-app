export interface Option extends Array<string> {}

export interface Question {
  question: string;
  options: Option;
  answer: string;
}

export interface QuizItem {
  title: string;
  icon: string;
  questions: Question[];
}

export interface Quiz {
  quizzes: QuizItem[];
}
