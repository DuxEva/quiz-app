import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseQuestionsComponent } from './course-questions.component';
import { QuizItem, Question } from '@/types.common';

const mockQuiz: QuizItem = {
  title: 'Sample Quiz',
  icon: 'quiz-icon',
  questions: [
    {
      question: 'What is 2+2?',
      options: ['3', '4'],
      answer: '4',
    },
    {
      question: 'What is 3+3?',
      options: ['6', '7'],
      answer: '6',
    },
  ],
};

describe('CourseQuestionsComponent', () => {
  let component: CourseQuestionsComponent;
  let fixture: ComponentFixture<CourseQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseQuestionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle changes to selectedQuiz', () => {
    component.selectedQuiz = mockQuiz;
    component.ngOnChanges();

    expect(component.currentQuestionIndex).toBe(0);
    expect(component.marks).toBe(0);
    expect(component.currentQuestion).toEqual(mockQuiz.questions[0]);
  });

  it('should select an option', () => {
    component.selectOption('4');
    expect(component.selectedOption).toBe('4');
  });

  it('should handle submit and move to next question', () => {
    component.selectedQuiz = mockQuiz;
    component.ngOnChanges();
    component.selectOption('4');
    component.submitOrNext();

    expect(component.userAnswer).toBeTruthy();
    expect(component.marks).toBe(1);
    expect(component.buttonLabel).toBe('Next Question');

    component.submitOrNext(); // Move to next question
    expect(component.currentQuestionIndex).toBe(1);
    expect(component.currentQuestion).toEqual(mockQuiz.questions[1]);
  });

  it('should complete quiz and emit marks', () => {
    component.selectedQuiz = mockQuiz;
    component.ngOnChanges();
    component.selectOption('4');
    component.submitOrNext();
    component.selectOption('6');
    component.submitOrNext();

    let marks: number | undefined;
    component.quizCompleted.subscribe((value) => (marks = value));

    expect(component.showResult).toBeTruthy();
  });

  it('should reset the quiz and emit quizReset', () => {
    component.selectedQuiz = mockQuiz;
    component.ngOnChanges();
    component.selectOption('4');
    component.submitOrNext();

    let resetOccurred = false;
    component.quizReset.subscribe(() => (resetOccurred = true));

    component.tryAgain();

    expect(component.currentQuestionIndex).toBe(0);
    expect(component.marks).toBe(0);
    expect(component.showResult).toBeFalsy();
    expect(component.selectedOption).toBeUndefined();
    expect(component.userAnswer).toBeNull();
    expect(component.buttonLabel).toBe('Submit Answer');
    expect(component.selectedQuiz).toBeUndefined();
    expect(component.currentQuestion).toBeUndefined();
    expect(resetOccurred).toBeTruthy();
  });
});
