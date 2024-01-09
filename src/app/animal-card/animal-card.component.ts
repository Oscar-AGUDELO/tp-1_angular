import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
})
export class AnimalCardComponent {
  @Input() animal: any;

  showAnimalSound() {
    alert(`Le cri du ${this.animal.name} : ${this.animal.sound}`);
  }
}
