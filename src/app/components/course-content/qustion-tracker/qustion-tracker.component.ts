import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-qustion-tracker',
  templateUrl: './qustion-tracker.component.html',
  styleUrls: ['./qustion-tracker.component.css'],
})
export class QustionTrackerComponent implements OnChanges {
  @Input() index: number | undefined = 0;
  width: string = '0%';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['index'] && this.index !== undefined) {
      this.width = `${(this.index / 10) * 100}%`;
      console.log('Tracker Width:', this.width);
    }
  }
}
