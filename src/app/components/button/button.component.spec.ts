import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit buttonClick event when clicked', () => {
    const emitSpy = jest.spyOn(component.buttonClick, 'emit');

    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();

    expect(emitSpy).toHaveBeenCalled();
  });

  it('should display default label', () => {

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.textContent).toContain('Submit Answer');
  });

  it('should display custom label when @Input() is set', () => {
    component.label = 'Custom Label';
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.textContent).toContain('Custom Label');
  });
});
