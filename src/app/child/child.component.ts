import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() increment = new EventEmitter<void>();
  counter = 0;

  incrementCounter() {
    this.counter++;
    this.increment.emit();
  }
}
