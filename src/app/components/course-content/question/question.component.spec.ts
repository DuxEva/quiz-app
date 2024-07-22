import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';
import { Question, QuizItem } from '@/types.common';
import { SimpleChange } from '@angular/core';

// Mock data for testing
const mockQuestion: Question = {
  question: 'What is 2+2?',
  options: ['3', '4'],
  answer: '4',
};

const mockQuiz: QuizItem = {
  title: 'Sample Quiz',
  icon: 'quiz-icon',
  questions: [mockQuestion],
};

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit currentQuestionChange on question and index changes', () => {
    spyOn(component.currentQuestionChange, 'emit');

    component.question = mockQuestion;
    component.index = 0;

    component.ngOnChanges({
      question: new SimpleChange(null, mockQuestion, true),
      index: new SimpleChange(null, 0, true),
    });

    expect(component.currentQuestionChange.emit).toHaveBeenCalledWith(0);
  });

  it('should not emit currentQuestionChange if question or index is undefined', () => {
    spyOn(component.currentQuestionChange, 'emit');

    component.ngOnChanges({
      question: new SimpleChange(undefined, undefined, false),
      index: new SimpleChange(undefined, undefined, false),
    });

    expect(component.currentQuestionChange.emit).not.toHaveBeenCalled();
  });

  it('should update question and index when ngOnChanges is called', () => {
    component.ngOnChanges({
      question: new SimpleChange(null, mockQuestion, true),
      index: new SimpleChange(null, 1, true),
    });

    expect(component.question).toEqual(mockQuestion);
    expect(component.index).toBe(1);
  });
});
