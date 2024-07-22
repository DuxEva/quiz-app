import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme-service.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle theme from light to dark', () => {
    // Set initial theme to light
    expect(service.theme).toBe('light');
    const classListSpy = jest.spyOn(document.body.classList, 'toggle');

    service.toggleTheme();

    // Check if the theme has been toggled to dark
    expect(service.theme).toBe('dark');
    expect(classListSpy).toHaveBeenCalledWith('dark', true);
  });

  it('should toggle theme from dark to light', () => {
    // Set initial theme to dark
    service.theme = 'dark';
    expect(service.theme).toBe('dark');
    // Simulate document body classList
    const classListSpy = jest.spyOn(document.body.classList, 'toggle');

    service.toggleTheme();

    // Check if the theme has been toggled to light
    expect(service.theme).toBe('light');
    expect(classListSpy).toHaveBeenCalledWith('dark', false);
  });
});
