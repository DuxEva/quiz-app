import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QustionTrackerComponent } from './qustion-tracker.component';

describe('QustionTrackerComponent', () => {
  let component: QustionTrackerComponent;
  let fixture: ComponentFixture<QustionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QustionTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QustionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
