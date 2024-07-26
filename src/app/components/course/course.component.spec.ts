import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { QuizDataService } from '../../service/quiz/quiz-data.service';
import { QuizItem, Question } from '../../../types.common';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let quizDataService: jest.Mocked<QuizDataService>;

  beforeEach(async () => {
    const quizDataServiceMock = {
      getQuizData: jest.fn(),
    } as unknown as jest.Mocked<QuizDataService>;

    await TestBed.configureTestingModule({
      declarations: [CourseComponent],
      providers: [{ provide: QuizDataService, useValue: quizDataServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    quizDataService = TestBed.inject(
      QuizDataService
    ) as jest.Mocked<QuizDataService>;

    quizDataService.getQuizData.mockReturnValue([
      {
        title: 'title',
        icon: 'Quiz 1',
        questions: [
          { question: 'What is 2+2?', options: ['3', '4'], answer: '4' },
        ],
      },
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get quiz data on initialization', () => {
    expect(quizDataService.getQuizData).toHaveBeenCalled();
    expect(component.quizData.length).toBeGreaterThanOrEqual(0)
  });

  it('should emit quizSelected event and update state when getSelectedQuizData is called', () => {
    // Arrange
    const quiz: QuizItem = {
      title: 'css',
      icon: 'Quiz 1',
      questions: [
        { question: 'What is 2+2?', options: ['3', '4'], answer: '4' },
      ],
    };
    const emitQuizSpy = jest.spyOn(component.quizSelected, 'emit');

    component.getSelectedQuizData(quiz);

    expect(emitQuizSpy).toHaveBeenCalledWith(quiz);
    expect(component.selectedQuiz).toBe(quiz);
    expect(component.showResult).toBe(false);
    expect(component.marks).toBe(0);
    expect(component.currentQuestion).toEqual(quiz.questions[0]);
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should reset quiz when resetQuiz is called', () => {
    component.selectedQuiz = { title: 'html', icon: 'Quiz 1', questions: [] };
    component.currentQuestion = {
      question: 'Sample Question',
      options: [],
      answer: '',
    };
    component.currentQuestionIndex = 1;
    component.showResult = true;
    component.marks = 10;
    const emitResetSpy = jest.spyOn(component.quizReset, 'emit');

    component.resetQuiz();

    expect(emitResetSpy).toHaveBeenCalled();
    expect(component.selectedQuiz).toBeUndefined();
    expect(component.currentQuestion).toBeUndefined();
    expect(component.currentQuestionIndex).toBe(0);
    expect(component.showResult).toBe(false);
    expect(component.marks).toBe(0);
  });

  it('should update current question when updateCurrentQuestion is called', () => {
    const question: Question = {
      question: 'What is 2+2?',
      options: ['3', '4'],
      answer: '4',
    };

    component.updateCurrentQuestion({ question, index: 1 });

    expect(component.currentQuestion).toBe(question);
    expect(component.currentQuestionIndex).toBe(1);
  });

  it('should update tracker width when updateTrackerWidth is called', () => {
    component.updateTrackerWidth(2);

    expect(component.currentQuestionIndex).toBe(2);
  });

  it('should complete quiz and set marks when completeQuiz is called', () => {
    component.completeQuiz(8);

    expect(component.showResult).toBe(true);
    expect(component.marks).toBe(8);
  });
});
