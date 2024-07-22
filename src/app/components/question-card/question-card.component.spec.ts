import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionCardComponent } from './question-card.component';
import { Question } from '@/types.common';

describe('QuestionCardComponent', () => {
  let component: QuestionCardComponent;
  let fixture: ComponentFixture<QuestionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit answerSelected event when an option is selected', () => {
    const spy = jest.spyOn(component.answerSelected, 'emit');
    const option = 'Option 1';
    component.selectOption(option);
    expect(spy).toHaveBeenCalledWith(option);
  });

  it('should not emit answerSelected event if an option is selected and userAnswer is already set', () => {
    const spy = jest.spyOn(component.answerSelected, 'emit');
    component.userAnswer = true; // or false
    const option = 'Option 1';
    component.selectOption(option);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should return true for isCorrectOption if the option is correct and userAnswer is set', () => {
    const question: Question = {
      question: 'What is 2+2?',
      options: ['3', '4'],
      answer: '4',
    };
    component.question = question;
    component.userAnswer = true;
    expect(component.isCorrectOption('4')).toBeTruthy();
  });

  it('should return false for isCorrectOption if the option is not correct or userAnswer is not set', () => {
    const question: Question = {
      question: 'What is 2+2?',
      options: ['3', '4'],
      answer: '4',
    };
    component.question = question;
    component.userAnswer = null;
    expect(component.isCorrectOption('3')).toBeFalsy();
  });

  it('should return true for isSelectedIncorrectOption if the option is selected and incorrect', () => {
    const question: Question = {
      question: 'What is 2+2?',
      options: ['3', '4'],
      answer: '4',
    };
    component.question = question;
    component.selectedOption = '3';
    component.userAnswer = true;
    expect(component.isSelectedIncorrectOption('3')).toBeTruthy()
  });

  it('should return false for isSelectedIncorrectOption if the option is not selected or correct', () => {
    const question: Question = {
      question: 'What is 2+2?',
      options: ['3', '4'],
      answer: '4',
    };
    component.question = question;
    component.selectedOption = '4';
    component.userAnswer = true;
    expect(component.isSelectedIncorrectOption('4')).toBeFalsy();
  });
});
