import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QustionTrackerComponent } from './qustion-tracker.component';
import { SimpleChange } from '@angular/core';

describe('QustionTrackerComponent', () => {
  let component: QustionTrackerComponent;
  let fixture: ComponentFixture<QustionTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QustionTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QustionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update width correctly based on index', () => {
    component.ngOnChanges({
      index: new SimpleChange(undefined, 3, true),
    });
    expect(component.width).toBe('40%');

    component.ngOnChanges({
      index: new SimpleChange(3, 5, true),
    });
    expect(component.width).toBe('60%');
  });

  it('should handle undefined index gracefully', () => {
    component.ngOnChanges({
      index: new SimpleChange(undefined, undefined, true),
    });
    expect(component.width).toBe('0%');
  });

  it('should not update width if index is the same', () => {
    component.width = '30%';
    component.ngOnChanges({
      index: new SimpleChange(2, 2, false),
    });
    expect(component.width).toBe('30%');
  });
});
