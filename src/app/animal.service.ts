import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  getAnimals() {
    return [
      { name: 'Lion', photo: 'lion.jpg', sound: 'Roar!' },
      { name: 'Elephant', photo: 'elephant.jpg', sound: 'Trumpet!' },
    ];
  }
}
