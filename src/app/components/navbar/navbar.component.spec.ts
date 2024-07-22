import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { QuizItem } from '../../../types.common';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle ngOnChanges with a new selectedQuiz', () => {
    const quiz: QuizItem = {
      title: 'Sample Quiz',
      icon: 'quiz-icon',
      questions: [
        {
          question: 'Sample Question?',
          options: ['Option 1', 'Option 2'],
          answer: 'Option 1',
        },
      ],
    };

    component.selectedQuiz = quiz;
    component.ngOnChanges(); // Manually trigger ngOnChanges

    expect(component.selectedQuiz).toBe(quiz);
  });

  it('should not fail when selectedQuiz is undefined', () => {
    component.selectedQuiz = undefined;
    component.ngOnChanges();

    expect(component.selectedQuiz).toBeUndefined();
  });
});
