import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizDataService } from './service/quiz/quiz-data.service';
import { QuizItem } from '@/types.common';

// Mock data to simulate DATA.quizzes
const mockQuizData: QuizItem[] = [
  {
    title: 'Quiz 1',
    icon: 'Quiz 1',
    questions: [{ question: 'What is 2+2?', options: ['3', '4'], answer: '4' }],
  },
  {
    title: 'Quiz 2',
    icon: 'Quiz 2',
    questions: [{ question: 'What is 3+3?', options: ['6', '7'], answer: '6' }],
  },
];

// Mock QuizDataService
class MockQuizDataService {
  getQuizData(): QuizItem[] {
    return mockQuizData;
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let quizDataService: MockQuizDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent],
      providers: [{ provide: QuizDataService, useClass: MockQuizDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    quizDataService = TestBed.inject(
      QuizDataService
    ) as unknown as MockQuizDataService;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch quiz data on initialization', () => {
    expect(component.quizData).toEqual(mockQuizData);
  });

  it('should set selectedQuiz when onQuizSelected is called', () => {
    const quiz = mockQuizData[0];
    component.onQuizSelected(quiz);
    expect(component.selectedQuiz).toEqual(quiz);
  });

  it('should clear selectedQuiz when onQuizReset is called', () => {
    component.selectedQuiz = mockQuizData[0];
    component.onQuizReset();
    expect(component.selectedQuiz).toBeUndefined();
  });
});
