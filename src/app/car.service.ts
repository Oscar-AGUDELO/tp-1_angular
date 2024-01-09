import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  getCars() {
    return [
      {
        id: 1,
        marque: 'Toyota',
        modele: 'Corolla',
        details: 'Details sur la Corolla',
      },
      {
        id: 2,
        marque: 'Honda',
        modele: 'Civic',
        details: 'Details sur la Civic',
      },
    ];
  }
}
