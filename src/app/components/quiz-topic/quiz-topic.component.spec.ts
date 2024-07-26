import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizTopicComponent } from './quiz-topic.component';
import { QuizDataService } from '@/app/service/quiz/quiz-data.service';
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

describe('QuizTopicComponent', () => {
  let component: QuizTopicComponent;
  let fixture: ComponentFixture<QuizTopicComponent>;
  let quizDataService: MockQuizDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizTopicComponent],
      providers: [{ provide: QuizDataService, useClass: MockQuizDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizTopicComponent);
    component = fixture.componentInstance;
    quizDataService = TestBed.inject(
      QuizDataService
    ) as unknown as MockQuizDataService;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with quiz data', () => {
    component.ngOnInit();
    expect(component.quizData).toEqual(mockQuizData);
  });

  it('should emit the selected quiz when getSelectedQuizData is called', () => {
    const quiz = mockQuizData[0];
    jest.spyOn(component.quizSelected, 'emit');

    component.emitSelectedQuizData(quiz);

    expect(component.quizSelected.emit).toHaveBeenCalledWith(quiz);
  });
});
