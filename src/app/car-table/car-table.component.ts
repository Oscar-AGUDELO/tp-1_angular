import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.scss'],
})
export class CarTableComponent {
  cars: any[];
  selectedCar: any;

  constructor(private carService: CarService) {
    this.cars = this.carService.getCars();
  }

  showDetails(car: any) {
    this.selectedCar = car;
  }
}
