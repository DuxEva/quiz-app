// quiz-data.service.test.ts

import { QuizDataService } from './quiz-data.service';

describe('QuizDataService', () => {
  let service: QuizDataService;

  beforeEach(() => {
    service = new QuizDataService();
  });

  it('should return the correct quiz data for a given title', () => {
    const mockQuizData = [
      {
        title: 'Quiz 1',
        icon: 'Quiz 1',
        questions: [
          { question: 'What is 2+2?', options: ['3', '4'], answer: '4' },
        ],
      },
      {
        title: 'Quiz 2',
        icon: 'Quiz 2',
        questions: [
          { question: 'What is 3+3?', options: ['6', '7'], answer: '6' },
        ],
      },
    ];

    service.quizData = mockQuizData;

    const selectedQuizTitle = 'Quiz 1';
    const selectedQuiz = service.getSelectedQuizData(selectedQuizTitle);
    expect(selectedQuiz).toBeDefined();
    expect(selectedQuiz?.title).toBe(selectedQuizTitle);
  });

  it('should return undefined if the title is not found in the quiz data', () => {
    const mockQuizData = [
      {
        title: 'Quiz 1',
        icon: 'Quiz 1',
        questions: [
          { question: 'What is 2+2?', options: ['3', '4'], answer: '4' },
        ],
      },
      {
        title: 'Quiz 2',
        icon: 'Quiz 2',
        questions: [
          { question: 'What is 3+3?', options: ['6', '7'], answer: '6' },
        ],
      },
    ];


    service.quizData = mockQuizData;

    const selectedQuizTitle = 'Quiz 3';
    const selectedQuiz = service.getSelectedQuizData(selectedQuizTitle);

    expect(selectedQuiz).toBeUndefined();
  });
  
});
