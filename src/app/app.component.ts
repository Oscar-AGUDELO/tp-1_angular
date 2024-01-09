import { Component } from '@angular/core';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  animals: any[];

  constructor(private animalService: AnimalService) {
    this.animals = this.animalService.getAnimals();
  }
}
