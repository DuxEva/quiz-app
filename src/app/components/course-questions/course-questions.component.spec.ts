import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseQuestionsComponent } from './course-questions.component';

describe('CourseQuestionsComponent', () => {
  let component: CourseQuestionsComponent;
  let fixture: ComponentFixture<CourseQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
