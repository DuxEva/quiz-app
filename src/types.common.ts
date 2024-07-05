export interface Quiz {
  title: string;
  icon: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: Option[];
  answer: string
}

export interface Option extends Array<string> {}
