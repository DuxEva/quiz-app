import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css',
})
export class StarterComponent {
  @Input() title: string = 'Welcome to the';
  @Input() subtitle: string = 'Frontend Quiz!';
  @Input() getStarted?: string = 'Get Started';
}
